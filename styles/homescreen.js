import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles= StyleSheet.create({
    container:{
        flex : 1,
        paddingTop:Theme.sizes[2],
        paddingHorizontal:8
    },
    header:{
        flex:2,
        marginBottom:Theme.sizes[2],
        // for iOS only
        shadowColor:'black',
        shadowOffset:{width:4,height:4},
        shadowRadius:4,
        shadowOpacity:0.5,
        elevation:5
    },
    nav:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:Theme.sizes[2],
    },
    // brandOutline:{
    //     borderTopWidth:4,
    //     borderTopColor:Theme.colors.brown700,
    //     borderRightWidth:4,
    //     borderRightColor:Theme.colors.orange700,
    //     borderBottomWidth:4,
    //     borderBottomColor:Theme.colors.orange700,
    //     borderLeftWidth:4,
    //     borderLeftColor:Theme.colors.brown700,
    //     paddingHorizontal:Theme.sizes[2],
    //     paddingVertical:Theme.sizes[1] - 4,
    //     justifyContent:'center',
    //     alignItems:'center',
    // },
    brandText:{
        fontFamily: 'Lobster_400Regular',
        fontSize: Theme.fonts.fontSizePoint.h5,
        color:Theme.colors.purple500,
    },
    profileOutline:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:70,
        borderWidth:4,
        borderColor:Theme.colors.orange500,
        backgroundColor:Theme.colors.orange700,
    },
    userPix:{
        width:40,
        height:40,
        borderRadius:60
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
    transact:{
        flex:1,
        flexDirection:'row',
        marginBottom:Theme.sizes[2]
    },
    income:{
        flex:3,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        padding:Theme.sizes[3],
        backgroundColor:Theme.colors.greenAltYellow,
        marginRight:Theme.sizes[1]
    },
    incomeText:{
        marginLeft:Theme.sizes[1],
        color:Theme.colors.yellowAltGreen,
        fontSize:Theme.fonts.fontSizePoint.h5,
        fontWeight:'bold'
    },
    expense:{
        flex:3,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        padding:Theme.sizes[3],
        backgroundColor:Theme.colors.redAltYellow,
        marginLeft:Theme.sizes[1]
    },
    expenseText:{
        marginLeft:Theme.sizes[1],
        color:Theme.colors.yellowAltRed,
        fontSize:Theme.fonts.fontSizePoint.h5,
        fontWeight:'bold'
    },
    events:{
        flex:2,
        marginBottom:Theme.sizes[2]
    },
    quizes:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:Theme.sizes[2],
        marginBottom:Theme.sizes[2],
        backgroundColor:Theme.colors.brown900,
        borderRadius:10,
    },
    quizHeading:{
        fontSize:Theme.fonts.fontSizePoint.title,
        color:Theme.colors.orange500
    },
    quizInfo:{
        fontSize:Theme.fonts.fontSizePoint.h4,
        color:Theme.colors.brown500
    }
})