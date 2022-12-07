import {View, Text, Image, FlatList} from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { useState, useEffect,useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Theme } from '../themes/theme';
import {Ionicons} from '@expo/vector-icons';
import { styles } from '../styles/favourites';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export function Favourites ({navigation}){
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
            <FlatList>
                <Text style={{fontSize:20}}>My Favourites</Text>
                
            </FlatList>
        </SafeArea>
    )
}