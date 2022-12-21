import {View, Text, Alert} from 'react-native';
import {SafeArea} from '../utilities/AreaView';
import { styles } from '../styles/addexpense';
import { Theme } from '../themes/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTurnUp } from '@fortawesome/free-solid-svg-icons';
import {TextInput, Button} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { db } from '../Firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { AppContext } from '../globals/AppContext';
import { useContext } from 'react';

const formRules = yup.object({
    amount:yup.number()
    .min(1,'enter at least 1 naira')
    .required('this field is mandatory'),

    description:yup.string()
    .required('this field is required')
    .min(3,'write up to 3 characters')
    .max(120,'not more than 120 characters')
})

export function AddExpense (){
    const { uid } = useContext(AppContext);

    return(
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.header}>
                    <FontAwesomeIcon
                    icon={faTurnUp}
                    color={Theme.colors.red500}
                    size={Theme.fonts.fontSizePoint.h4}/>
                    <Text style={styles.headerText}>Track an expense</Text>
                </View>

                <Formik
                initialValues={{
                    amount:0,
                    description:''
                }}

                onSubmit={(values,actions) => {
                    const now = new Date();
                    const timestamp = now.getTime();

                    addDoc(collection(db,'transactions'),{
                        amount:values.amount,
                        transType: 'Expense',
                        desc:values.description,
                        userUID:uid,
                        eventTime:timestamp
                    })
                    .then(() => Alert.alert(
                        'Status',
                        `You have successfully filed an expense of N${values.amount}`,
                        [{text:'Okay'}]
                    ))
                    .catch((error) => console.log(error))

                    actions.resetForm(); //clear inputs
                }}

                validationSchema={formRules}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                        <>
                            <TextInput
                            placeholder='expense amount'
                            mode='outlined'
                            outlineColor={Theme.colors.red500}
                            activeOutlineColor={Theme.colors.red700}
                            style={{
                                paddingVertical:Theme.sizes[2], 
                                fontSize:Theme.fonts.fontSizePoint.title,
                                marginBottom:Theme.sizes[2]
                                }}
                            keyboardType='number-pad'
                            onChangeText={handleChange('amount')}
                            onBlur={handleBlur('amount')}
                            value={values.amount}/>
                            <Text style={{color:'red',
                                 marginBottom:Theme.sizes[2],
                                 display:!touched.amount && !errors.amount ? 'none' : null
                                }}>
                                {touched.amount && errors.amount}
                            </Text>

                            <TextInput
                            placeholder='expense description'
                            mode='outlined'
                            outlineColor={Theme.colors.red500}
                            activeOutlineColor={Theme.colors.red700}
                            style={{
                                paddingVertical:Theme.sizes[2],
                                fontSize:Theme.fonts.fontSizePoint.title,
                                marginBottom:Theme.sizes[2],
                                }}
                            multiline={true}
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                            value={values.description}/>
                            <Text style={{color:'red', 
                                marginBottom:Theme.sizes[2],
                                display:!touched.description && !errors.description ? 'none' : null
                                }}>
                                {touched.description && errors.description}
                            </Text>

                            <Button
                                color={Theme.colors.red700}
                                mode='contained'
                                contentStyle={{paddingVertical:Theme.sizes[3]}}
                                onPress={handleSubmit}>TRACK EXPENSE
                            </Button>
                        </>
                    )}                
                    
                </Formik>

            </View>
        </SafeArea>
    )
}