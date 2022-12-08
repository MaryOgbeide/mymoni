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
    return(
        <View style={styles.container}>
            <View>
                <Text>My Favourites</Text>
                <FontAwesomeIcon icon={faHeart} color={''} size={''}></FontAwesomeIcon>
            </View>

            <View>
            <View style={styles.tipOfDay}>
              <View style={styles.tipImgBlock}>
                    <Image style={styles.tipOfDayImg} source={require('../assets/piggy-bank.jpg')}/>
              </View>
              <View style={styles.tip}>
                    <Text style={styles.tipText}>By age 25, you should have saved at least 0.5x your annual expenses. The more the better. In other words, If you spend $50,000 a year, you should have about $25,000 in your savings</Text>
                    <View style={styles.tipOptions}>
                        <Text style={styles.preTips}>Previous tips</Text>
                        <FontAwesomeIcon icon={faHeart} color={Theme.colors.brown500} size={Theme.fonts.fontSizePoint.caption}/>
                    </View>
              </View>
            </View>
            </View>
        </View>
    )
}