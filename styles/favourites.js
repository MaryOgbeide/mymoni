import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles= StyleSheet.create({
    container:{
        flex:1
    },
    tipOfDay:{
        flex:5,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:Theme.sizes[1],
        padding:Theme.sizes[2],
        borderRadius:10,
        backgroundColor:Theme.colors.brown700
    },
    tipImgBlock:{
        flex:1.5,
        marginRight:Theme.sizes[2]
    },
    tipOfDayImg:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    tip:{
        flex:4.5,
        justifyContent:'space-between'
    },
    tipText:{
        fontSize:Theme.fonts.fontSizePoint.title,
        fontFamily:'Philosopher_700Bold',
        color:Theme.colors.brown300
    },
    tipOptions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    preTips:{
        color:Theme.colors.brown500,
        fontSize:Theme.fonts.fontSizePoint.caption,
        fontWeight:'bold'
    },
})