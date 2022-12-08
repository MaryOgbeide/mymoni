import { Platform, StatusBar, StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles=StyleSheet.create({
   container:{
      flex:1,
      //paddingHorizontal:1,
      alignItems:"center",
      backgroundColor:Theme.colors.orange300,
      //marginTop:Platform.OS === 'android'? StatusBar.currentHeight: null,
   },
   brand:{
    alignItems:'center',
    marginVertical: 10,
   },
   brandName:{
    fontSize:40,
    fontFamily:'Lobster_400Regular',
    color:Theme.colors.purple500
   },
   data:{
    alignItems:'center',
   },
   write1:{
    fontFamily:'Philosopher_700Bold',
    fontSize:25,
    color:Theme.colors.purple300,
   },
   write:{
    fontFamily:'Philosopher_700Bold',
    fontSize:18,
    color:Theme.colors.purple300
   },
   input:{
   // color: 'purple',
    borderWidth:2,
    width:320,
    height:40,
    borderRadius:30,
    textAlign:'center',
    borderColor:Theme.colors.orange900,
    fontSize:16,
    fontFamily:'Philosopher_700Bold',
    color:Theme.colors.purple500,
    fontWeight:'bold'
   },
   button:{
    marginTop:40,
    backgroundColor:Theme.colors.purple500,
    width: 320,
    fontFamily:'Philosopher_700Bold',
    fontSize:20,
},
button2:{
    fontSize:20,
    fontFamily:'Philosopher_700Bold',
    marginTop:10,
    backgroundColor:Theme.colors.orange900,
    width:320
   },
   firstname:{
    marginBottom:8
   },
   lastname:{
    marginBottom:8
   },
   phone:{
    marginBottom:8
   },
   email:{
    marginBottom:8
   },
   password:{
    marginBottom:8
   },
   confirm:{
    marginBottom:8
   },
   
})