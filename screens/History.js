import {useContext,useEffect,useState} from 'react';
import {AppContext} from '../globals/AppContext';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button, TextInput } from 'react-native-paper';
import { db } from '../Firebase/firebase';
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';
import { styles } from '../styles/history';
import { HistoryTemplate } from '../components/historytype';


export function History({navigation}){
    const {uid} = useContext(AppContext);
    const [history,setHistory] = useState([]);

    

    //read all transactions specific to user
    const queryRef = collection(db,'transactions');
    useEffect(() => {
        onSnapshot(query(queryRef,where('userUID','==',uid),orderBy('eventTime','desc')),(onSnapshotResponse) => {
            const compiledHistory = [];

            //console.log(onSnapshotResponse);
            onSnapshotResponse.forEach((document) => {
                compiledHistory.push(document.data());
                setHistory(compiledHistory);
            })
        })
    },[]);
    

    return(
        <SafeArea>
            <View style={styles.container}>
                
                <View style={styles.historyBlock}>
                    <FlatList
                        data={history}
                        renderItem={({item}) =>{ 
                            return(
                                <TouchableOpacity style={styles.transDetails}>
                                    <View style={styles.expenseInfo}>
                                        <Text style={styles.userGross}>{item.desc}</Text>
                                        <Text style={styles.userAmount}>{item.amount}</Text>
                                        <Text style={styles.userDate}>25/12/2022</Text>
                                        <Text style={styles.userStamp}>1 hour ago</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        key={({item}) => item.transactionid}

                        
                    />
                {/* {console.log(history)} */}
                </View>
                
            </View>
            
        </SafeArea>
    )
}

