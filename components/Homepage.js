import React,{useEffect, useRef, useState} from 'react'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications';
import { View,StyleSheet, Button, Text, Image, StatusBar } from 'react-native'
import DialogBox from './DialogBox'
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
const Homepage = () => {
    const [show,setShow] = useState(false)
    const openDialog = ()=>{
        setShow(true)
    }
    return (
       <View style={styles.wrapper}>
       <DialogBox show={show} setShow={setShow}/>
       <Text style={styles.headingText}>Notification API</Text>
       <View style={styles.wrapperImg}>
        <Image
           source={require('../assets/image/react-native.jpg')}
           style={styles.img}
       />
       </View>

       <Button title="Click Me" color="#1F4788" onPress={()=>openDialog()}/>
       </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        alignItems:'center'
    },
    wrapperImg:{
        width:250,
        height:150,
        shadowColor:'#fff',
        shadowOffset:{width:10,height:12},
        shadowOpacity:.4,
        elevation:16,
        marginTop:10,
        marginBottom:10
    },
    img:{
        width:'100%',
        height:'100%'
    },
    headingText:{
        fontSize:28
    }
})
export default Homepage
