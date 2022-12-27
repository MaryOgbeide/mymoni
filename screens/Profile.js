import { useState, useEffect,useCallback, useContext } from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { SafeArea } from '../utilities/AreaView';
import { Theme } from '../themes/theme';
import { styles } from '../styles/profile';
import { AppContext } from "../globals/AppContext";
import { signOut } from "firebase/auth";
import { Button } from 'react-native-paper';
import { authentication } from '../Firebase/firebase';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';



export function Profile ({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);
    const {setUid} = useContext(AppContext);

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

    return (
      <SafeArea>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.image}>
              <Image
                style={styles.userPix}
                source={require("../assets/profile-pix.jpg")}></Image>
            </View>
            <View style={styles.details}>
              <Text style={styles.joined}>Joined</Text>
              <Text style={styles.when}>6 months ago</Text>
            </View>
          </View>

          <View style={styles.name}>
            <Text style={styles.fName}>Mary</Text>
            <Text style={styles.lName}>Ogbeide</Text>
          </View>

          <View style={styles.menu}>
            <View style={styles.item1}>
              <View style={styles.medal}>
                {/* <Image style={styles.badge} source={require('../assets/medal.png')}/> */}
                <FontAwesomeIcon
                  icon={faStar}
                  size={30}
                  color={Theme.colors.redAltYellow}></FontAwesomeIcon>
              </View>
              <Text style={styles.list}>Badges</Text>
            </View>
            <View style={styles.rightIcon}>
              {/* <Image style={styles.right} source={require('../assets/right-arrow.png')}/> */}
              <FontAwesomeIcon
                icon={faChevronRight}
                size={25}></FontAwesomeIcon>
            </View>
          </View>

          <View style={styles.menu}>
            <View style={styles.item}>
              <View style={styles.medal}>
                {/* <Image style={styles.badge} source={require('../assets/phone-call.png')}/> */}
                <FontAwesomeIcon
                  icon={faPhone}
                  size={30}
                  color={Theme.colors.redAltYellow}></FontAwesomeIcon>
              </View>
              <Text style={styles.list}>Book a session</Text>
            </View>
            <View style={styles.rightIcon}>
              {/* <Image style={styles.right} source={require('../assets/right-arrow.png')}/> */}
              <FontAwesomeIcon
                icon={faChevronRight}
                size={25}></FontAwesomeIcon>
            </View>
          </View>

          <View style={styles.menu}>
            <View style={styles.item}>
              <View style={styles.medal}>
                {/* <Image
                  style={styles.badge}
                  source={require("../assets/user.png")}
                /> */}
                <FontAwesomeIcon
                  icon={faUser}
                  size={30}
                  color={Theme.colors.redAltYellow}></FontAwesomeIcon>
              </View>
              <Text style={styles.list}>Update profile</Text>
            </View>
            <View style={styles.rightIcon}>
              {/* <Image
                style={styles.right}
                source={require("../assets/right-arrow.png")}
              /> */}
              <FontAwesomeIcon
                icon={faChevronRight}
                size={25}></FontAwesomeIcon>
            </View>
          </View>

          <Button
            mode="contained"
            marginTop={50}
            contentStyle={{ paddingVertical: Theme.sizes[2] }}
            onPress={() => {
              signOut(authentication);
              setUid(null);
              navigation.navigate("Sign In");
            }}>
            SIGN OUT
          </Button>
        </View>
      </SafeArea>
    );
}