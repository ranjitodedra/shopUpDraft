import React ,{useState} from "react"
import { View,Text,Image ,StyleSheet, useWindowDimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/Header"

export const HomeScreen = () =>{

    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    return(
        <View style = {styles.root}>
            <Header/>

            <Text style = {styles.text} >Home</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    root :{
        height :"100%",
        padding : 0,
        backgroundColor : 'white',
        marginBottom : "100%"
    },
    text:{
        fontWeight : 'bold',
        color :"#707070",
        fontSize : 30,
        marginBottom: 30,
    },
})

export default HomeScreen;