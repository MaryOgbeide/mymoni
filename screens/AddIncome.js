import {View, Text, Alert} from 'react-native';
import {SafeArea} from '../utilities/AreaView';
import { styles } from '../styles/addincome';
import { Theme } from '../themes/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTurnDown } from '@fortawesome/free-solid-svg-icons';
import {TextInput, Button} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup'
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

export function AddIncome (){
    const { uid } = useContext(AppContext);

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

                <Formik
                initialValues={{
                    amount:0,
                    description:''
                }}

                onSubmit={(values,actions) => {
                    const now = new Date();
                    const timestamp = now.getTime();

                    //generate a unique id for each transactions,
                    const transactionid = 'INC'+ Math.round(Math.random()*100000000)

                    addDoc(collection(db,'transactions'),{
                        amount:values.amount,
                        transType: 'Income',
                        desc:values.description,
                        userUID:uid,
                        transactionID: transactionid,
                        eventTime:timestamp
                    })
                    .then(() => Alert.alert(
                        'Status',
                        `You have successfully filed an income of N${values.amount}`,
                        [{text:'Okay'}]
                    ))
                    .catch((error) => console.log(error))

                    actions.resetForm(); //clear inputs
                }}

                validationSchema={formRules}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                        <>
                            <TextInput
                            placeholder='income amount'
                            mode='outlined'
                            outlineColor={Theme.colors.green700}
                            activeOutlineColor={Theme.colors.green900}
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
                            placeholder='income description'
                            mode='outlined'
                            outlineColor={Theme.colors.green700}
                            activeOutlineColor={Theme.colors.green900}
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
                                color={Theme.colors.green900}
                                mode='contained'
                                contentStyle={{paddingVertical:Theme.sizes[3]}}
                                onPress={handleSubmit}>TRACK INCOME
                            </Button>
                        </>
                    )}                
                    
                </Formik>

            </View>
        </SafeArea>
    )
}