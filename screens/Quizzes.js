import {View} from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';

export function Quizzes ({navigation,route}){
    const {userName,email}= route.params;
    console.log(userName,email)
    
    return(
        <SafeArea>
            <View>
            </View>
        </SafeArea>
    )
}