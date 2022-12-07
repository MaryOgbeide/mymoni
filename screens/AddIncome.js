import {View, Text} from 'react-native';
import {SafeArea} from '../utilities/AreaView';
import { styles } from '../styles/addincome';
import { Theme } from '../themes/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTurnDown } from '@fortawesome/free-solid-svg-icons';
import {TextInput, Button} from 'react-native-paper';

export function AddIncome (){
    return(
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.header}>
                    <FontAwesomeIcon
                    icon={faTurnDown}
                    color={Theme.colors.green900}
                    size={Theme.fonts.fontSizePoint.h4}/>
                    <Text style={styles.headerText}>Track an income</Text>
                </View>

                <TextInput
                placeholder='income amount'
                mode='outlined'
                outlineColor={Theme.colors.green700}
                activeOutlineColor={Theme.colors.green900}
                style={{paddingVertical:Theme.sizes[2], 
                    fontSize:Theme.fonts.fontSizePoint.title,
                    marginBottom:Theme.sizes[2]}}
                keyboardType='number-pad'/>

                <TextInput
                placeholder='income description'
                mode='outlined'
                outlineColor={Theme.colors.green700}
                activeOutlineColor={Theme.colors.green900}
                style={{paddingVertical:Theme.sizes[2],
                    fontSize:Theme.fonts.fontSizePoint.title,
                    marginBottom:Theme.sizes[2]}}
                multiline={true}/>

                <Button
                color={Theme.colors.green900}
                mode='contained'
                contentStyle={{paddingVertical:Theme.sizes[3]}}>Track Income
                </Button>

            </View>
        </SafeArea>
    )
}