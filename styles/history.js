import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles= StyleSheet.create({
    container:{
        flex: 1,
       // backgroundColor: 'white',
    },
    transHeadLine:{
       marginTop: Theme.sizes[8]
    },
    transHis:{
        color:Theme.colors.purple700,
        textAlign: 'center',
        fontSize: Theme.fonts.fontSizePoint.title,
        fontWeight: "bold",
    },
    // transOptions:{
    //     marginTop: 20,
    //     flexDirection: "row",
    //     justifyContent: "space-evenly",
    // },
    // expense:{
    //     color: 'white',
    //     backgroundColor: Theme.colors.redAltYellow,
    //     borderWidth: 2,
    //     borderColor: Theme.colors.purple700,
    //     width: 150,
    //     height: 40,
    //     textAlign: 'center',
    // },
    // income:{
    //     color: 'white',
    //     backgroundColor: Theme.colors.greenAltYellow,
    //     borderWidth: 2,
    //     borderColor: Theme.colors.purple700,
    //     width: 150,
    //     height: 40,
    //     textAlign: 'center',
    // },
    historyBlock:{
        marginVertical:10,
    },
    transDetails:{
        borderWidth : 1,
        borderColor : "#EAEAEA",
        borderRadius : Theme.sizes[3],
        padding : Theme.sizes[1],
        marginBottom: 6,
        marginHorizontal: 10,
    },
    expenseInfo:{
        marginHorizontal: 20,
    },
    incomeInfo:{
        marginHorizontal: 20,
    },
    userStamp:{
        color: 'grey',
        marginTop:Theme.sizes[1]
    },
})