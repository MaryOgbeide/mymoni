import { useState, useEffect,useCallback } from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from "../styles/homescreen";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { SafeArea } from '../utilities/AreaView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart,faCirclePlus,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../themes/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FlashCards} from '../screens/FlashCards';
import {Favourites} from '../screens/Favourites';
import {History} from '../screens/History';
import {Ionicons} from '@expo/vector-icons';

//update theme.js
//update homescreen.js
//create folder "carousel" in assets
//add assets/piggy-bank.jpg
//add assets/carousel/never_give_up.jpg
//update Homescreen.js

function HomeScreen({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
    async function prepare() {
      try {
          await Font.loadAsync({Lobster_400Regular,Philosopher_700Bold});
          await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
     
      await SplashScreen.hideAsync();
    }
  },  [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return(
    <SafeArea>
        <View style={styles.container}>  
          <View style={styles.header}>
            <View style={styles.nav}>
                <Text style={styles.brandText}>mymoni</Text>
              <View style={styles.profileOutline}><Image style={styles.userPix} source={require('../assets/profile-pix.jpg')}/></View>
            </View>
            <View style={styles.tipOfDay}>
              <View style={styles.tipImgBlock}>
                <Image style={styles.tipOfDayImg} source={require('../assets/piggy-bank.jpg')}/>
              </View>
              <View style={styles.tip}>
                <Text style={styles.tipText}>By age 25, you should have saved at least 0.5x your annual expenses. The more the better. In other words, If you spend $50,000 a year, you should have about $25,000 in your savings</Text>
                <View style={styles.tipOptions}>
                  <TouchableOpacity>
                    <Text style={styles.preTips}>Previous tips</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesomeIcon icon={faHeart} color={Theme.colors.brown500} size={Theme.fonts.fontSizePoint.caption}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.transact}>
            <TouchableOpacity style={styles.income} onPress={() => navigation.navigate('Add Income')}>
              <FontAwesomeIcon size={Theme.fonts.fontSizePoint.h4} icon={faCirclePlus} color={Theme.colors.yellowAltGreen}/>
              <Text style={styles.incomeText}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.expense} onPress={() => navigation.navigate('Add Expense')}>
              <FontAwesomeIcon size={Theme.fonts.fontSizePoint.h4} icon={faCirclePlus} color={Theme.colors.yellowAltRed}/>
              <Text style={styles.expenseText}>Expense</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.events}>
            <Image 
            style={{height:'100%',width:'100%',borderRadius:10}} 
            source={require('../assets/carousel/never_give_up.jpg')}/>
          </View>

          <View style={styles.quizes}>
            <View style={styles.textBlock}>
              <Text style={styles.quizHeading}>Test your literacy</Text>
              <Text style={styles.quizInfo}>Take test</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quizzes',{
              userName:'Mary',
              email:'ogbeide@gmail.com'
            })}>
              <FontAwesomeIcon 
              icon={faArrowRight} 
              color={Theme.colors.brown300}
              size={Theme.sizes[5]}/>
            </TouchableOpacity>
          </View>
        </View>
    </SafeArea>
  )
};

const Tab = createBottomTabNavigator();

export function Home (){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'My Home') {
                iconName = focused
                    ? 'ios-home-sharp'
                    : 'ios-home-outline';
                } else if (route.name === 'Flash') {
                iconName = focused ? 'flash-sharp' : 'flash-outline';
                }
                 else if (route.name === 'Favs') {
                iconName = focused ? 'heart-sharp' : 'heart-outline';
                }
                 else if (route.name === 'History') {
                iconName = focused ? 'md-file-tray-stacked' : 'ios-file-tray-stacked';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Theme.colors.purple700,
            tabBarInactiveTintColor: Theme.colors.brown700
            })}
      >
            <Tab.Screen name="My Home" component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Flash" component={FlashCards} />
            <Tab.Screen name="Favs" component={Favourites} />
            <Tab.Screen name="History" component={History} />
            
      </Tab.Navigator>  
    )
}