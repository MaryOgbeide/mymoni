import {useContext} from 'react';
import {AppContext} from '../globals/AppContext';
import {View, Text} from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button, TextInput } from 'react-native-paper';

export function History ({navigation}){
    const {email,setEmail,fullName}= useContext(AppContext);

    return(
        <SafeArea>
            <View>
                <Text>{fullName}</Text>
                <TextInput placeholder='new email' onChangeText={(text)=>setEmail(text)}/>
                <Button mode='contained'>{email}</Button>
            </View>
        </SafeArea>
    )
}