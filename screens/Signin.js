import { SafeArea } from '../utilities/AreaView';
import { useState, useEffect,useCallback, useContext } from 'react';
import { AppContext } from '../globals/AppContext';
import { View, Text, TextInput, ScrollView, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/signin';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { Theme } from '../themes/theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Alert } from 'react-native';
import { authentication } from '../Firebase/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const Rules = yup.object({
   
    email:yup.string()
    .required('this field is required')
    .min(2,'write up to 2 characters'),
    password:yup.string()
    .required('this field is required')
    .min(8,'write up to 8 characters')
    

})

export function SignIn ({navigation}){
    const {uid,setUid} = useContext(AppContext)

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

    return (
        <SafeArea>
            <ScrollView>

            <View style={styles.container}>

                <View style={styles.brand}>
                    <Text style={styles.brandName}>mymoni</Text>
                    <Text style={styles.write1}>Get started</Text>
                </View>
                
                    <Image style={styles.card} source={require('../assets/vector-card.jpg')}></Image>
                
                <Formik
                initialValues={{
                    email:'',
                    password:'',
                   
                }}

                onSubmit={(values,actions) => {
                    signInWithEmailAndPassword(authentication,values.email,values.password,values.uid)
                    .then(() => {
                        onAuthStateChanged(authentication,(user) => {
                            setUid(user.uid)
                            navigation.navigate("Home");
                            
                        })
                    })
                    .catch((error) => 
                        console.log(error),
                        // Alert.alert(
                        //     'Status',
                        //     'Email or Password incorrect',
                        //     [{text:'Okay'}]),
                     );

                    actions.resetForm(); //clear inputs
                }}

                validationSchema={Rules}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                        <>
                
                            <View style={styles.data}>
                             
                                <View style={styles.email}>
                                    <Text style={styles.write}>Email</Text>
                                    <TextInput style={styles.input} 
                                    multiline={true}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}/>
                                <Text style={{color:'red', 
                                    display:!touched.email && !errors.email ? 'none' : null
                                    }}>
                                    {touched.email && errors.email}
                                </Text>
                                </View>


                                <View style={styles.password}>
                                    <Text style={styles.write}>Password</Text>
                                    <TextInput style={styles.input} 
                                    multiline={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}/>
                                <Text style={{color:'red',
                                    display:!touched.password && !errors.password ? 'none' : null
                                    }}>
                                    {touched.password && errors.password}
                                </Text>
                                </View>

                            </View>
                            <Button mode='contained'  onPress={handleSubmit} 
                            style={styles.button}>Sign In</Button>
                            
                        </>
                    )}
                </Formik>
            </View>
            </ScrollView>
        </SafeArea>
    )
}