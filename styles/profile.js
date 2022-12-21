import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    image:{
        borderWidth: 4,
        borderColor:'orange',
        width:120,
        height:120,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:50,

    },
    userPix:{
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    details:{
        borderLeftWidth:2,
        paddingLeft:50,
        height:90,
        borderColor:Theme.colors.orange700,
        justifyContent:'center',
        marginRight:40
    },
    when:{
        fontFamily:'Philosopher_700Bold',
        fontSize:16
    },
    name:{
        margin:50,
        
    },
    fName:{
        fontSize:30,
        fontWeight:'bold'
    },
    lName:{
        fontSize:30,
        color:'grey',
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    item1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginRight:70
    },
    menu:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:20
    },
    medal:{
        backgroundColor:Theme.colors.brown500,
        borderRadius:100,
        padding:8,
    },
    badge:{
        width:35,
        height:35
    },
    right:{
        width:25,
        height:25,
    },
    rightIcon:{
        backgroundColor:Theme.colors.brown500,
        padding:8,
        borderRadius:12,
    },
    list:{
        fontSize:20,
        fontFamily:'Philosopher_700Bold',
        marginLeft:20
    }
})