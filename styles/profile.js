import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
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
        borderColor:'grey',
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
    tab:{
        
    },
    menu:{
        flexDirection:'row',
        alignItems:'center'
    },
    medal:{
        backgroundColor:'grey',
        borderRadius:100,
        padding:8,
    },
    badge:{
        width:35,
        height:35
    },
    right:{
        width:25,
        height:25
    },
    rightIcon:{
        backgroundColor:'grey',
        padding:8,
        borderRadius:10
    },
    list:{
        fontSize:20,
        fontFamily:'Philosopher_700Bold',
    }
})