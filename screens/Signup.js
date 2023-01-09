import { SafeArea } from '../utilities/AreaView';
import { useState, useEffect,useCallback, useContext } from 'react';
import { AppContext } from '../globals/AppContext';
import { View, Text, TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/signin';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { Theme } from '../themes/theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { authentication } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const Rules = yup.object({
    fName:yup.string()
    .required('this field is required')
    .min(2,'write up to 2 characters')
    .max(25,'not more than 25 characters'),
    lName:yup.string()
    .required('this field is required')
    .min(2,'write up to 2 characters')
    .max(25,'not more than 25 characters'),
    email:yup.string()
    .required('this field is required')
    .min(2,'write up to 2 characters'),
    password:yup.string()
    .required('this field is required')
    .min(8,'write up to 8 characters')
    .oneOf([yup.ref('passwordConfirmation'),null],'password must match'),

    phoneNumber:yup.number()
    .min(11)
    .required('this field is mandatory')
})

export function SignUp ({navigation}){
    const {uid,setUid}= useContext(AppContext);


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
                    <Text style={styles.write1}>Create your account</Text>
                </View>

                <Formik
                initialValues={{
                    fName:'',
                    lName:'',
                    email:'',
                    password:'',
                    passwordConfirmation:'',
                    phoneNumber:0
                }}

                onSubmit={(values,actions) => {
                    createUserWithEmailAndPassword(authentication,values.email,values.password)
                    .then(() => {
                        onAuthStateChanged(authentication,(user) => {
                            setUid(user.uid);
                            navigation.navigate('Home');
                            
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });

                    actions.resetForm(); //clear inputs
                }}

                validationSchema={Rules}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                        <>
                
                            <View style={styles.data}>
                                <View style={styles.firstname}>
                                    <Text style={styles.write}>First Name</Text>
                                    <TextInput style={styles.input} 
                                     multiline={true}
                                     onChangeText={handleChange('fName')}
                                     onBlur={handleBlur('fName')}
                                     value={values.fName}/>
                                <Text style={{color:'red', 
                                    display:!touched.fName && !errors.fName ? 'none' : null
                                    }}>
                                    {touched.fName && errors.fName}
                                </Text>
                                </View>


                                <View style={styles.lastname}>
                                    <Text style={styles.write}>Last Name</Text>
                                    <TextInput style={styles.input} 
                                    multiline={true}
                                    onChangeText={handleChange('lName')}
                                    onBlur={handleBlur('lName')}
                                    value={values.lName}/>
                                <Text style={{color:'red', 
                                    display:!touched.lName && !errors.lName ? 'none' : null
                                    }}>
                                    {touched.lName && errors.lName}
                                </Text>
                                </View>


                                <View style={styles.phone}>
                                    <Text style={styles.write}>Phone Number</Text>
                                    <TextInput style={styles.input} 
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber}/>
                                <Text style={{color:'red', 
                                    display:!touched.phoneNumber && !errors.phoneNumber ? 'none' : null
                                    }}>
                                    {touched.phoneNumber && errors.phoneNumber}
                                </Text>
                                </View>


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


                                <View style={styles.confirm}>
                                    <Text style={styles.write}>Confirm Password</Text>
                                    <TextInput style={styles.input}
                                    multiline={true}
                                    onChangeText={handleChange('passwordConfirmation')}
                                    onBlur={handleBlur('passwordConfirmation')}
                                    value={values.passwordConfirmation} 
                                    secureTextEntry={true}/>
                                <Text style={{color:'red',
                                    display:!touched.passwordConfirmation && !errors.passwordConfirmation ? 'none' : null
                                    }}>
                                    {touched.passwordConfirmation && errors.passwordConfirmation}
                                </Text>
                                </View>


                            </View>
                            <Button mode='contained'  onPress={handleSubmit} 
                            style={styles.button}>Sign Up</Button>
                            <Button mode='contained' onPress={() => navigation.navigate('Sign In')} style={styles.button2}>
                                I already have an account</Button>
                        </>
                    )}
                </Formik>
            </View>
            </ScrollView>
        </SafeArea>
    )
}