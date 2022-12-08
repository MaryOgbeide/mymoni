import {View, Text} from 'react-native';
import {SafeArea} from '../utilities/AreaView';
import { styles } from '../styles/addexpense';
import { Theme } from '../themes/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTurnDown, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import {TextInput, Button} from 'react-native-paper';

export function AddExpense (){
    return(
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.header}>
                    <FontAwesomeIcon
                    icon={faTurnUp}
                    color={Theme.colors.red700}
                    size={Theme.fonts.fontSizePoint.h4}/>
                    <Text style={styles.headerText}>Track an Expense</Text>
                </View>

                <TextInput
                placeholder='expense amount'
                mode='outlined'
                outlineColor={Theme.colors.red500}
                activeOutlineColor={Theme.colors.red700}
                style={{paddingVertical:Theme.sizes[2], 
                    fontSize:Theme.fonts.fontSizePoint.title,
                    marginBottom:Theme.sizes[2]}}
                keyboardType='number-pad'/>

                <TextInput
                placeholder='expense description'
                mode='outlined'
                outlineColor={Theme.colors.red500}
                activeOutlineColor={Theme.colors.red700}
                style={{paddingVertical:Theme.sizes[2],
                    fontSize:Theme.fonts.fontSizePoint.title,
                    marginBottom:Theme.sizes[2]}}
                multiline={true}/>

                <Button
                color={Theme.colors.red700}
                mode='contained'
                contentStyle={{paddingVertical:Theme.sizes[3]}}>TRACK EXPENSE
                </Button>

            </View>
        </SafeArea>
    )
}