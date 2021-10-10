import React,{useState} from 'react'
import { View,StyleSheet, Button, Text, Image } from 'react-native'
import DialogBox from './DialogBox'

const Homepage = () => {
    const [show,setShow] = useState(false)
    const openDialog = ()=>{
        setShow(true)
    }
    return (
       <View style={styles.wrapper}>
       <DialogBox show={show} setShow={setShow}/>
       <Text>notification API</Text>
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
    },
    img:{
        width:'100%',
        height:'100%'
    }
})
export default Homepage
