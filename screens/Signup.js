import { SafeArea } from '../utilities/AreaView';
import { useState, useEffect,useCallback } from 'react';
import { View, Text, TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/signup';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';

export function SignUp ({navigation}){
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
                
                <View style={styles.data}>
                    <View style={styles.firstname}>
                        <Text style={styles.write}>First Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.lastname}>
                        <Text style={styles.write}>Last Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.phone}>
                        <Text style={styles.write}>Phone Number</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.email}>
                        <Text style={styles.write}>Email</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.password}>
                        <Text style={styles.write}>Password</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.confirm}>
                        <Text style={styles.write}>Confirm Password</Text>
                        <TextInput style={styles.input} />
                    </View>

                </View>
                <Button mode='contained' onPress={() => navigation.navigate('Home')} style={styles.button}><Text style={styles.button}>Sign Up</Text></Button>
                <Button mode='contained' onPress={() => navigation.navigate('Sign In')} style={styles.button2}>
                    <Text style={styles.button2}>I already have an account</Text></Button>
            </View>
            </ScrollView>
        </SafeArea>
    )
}