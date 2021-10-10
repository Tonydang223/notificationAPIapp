import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const DialogBox = ({show,setShow}) => {
    const closeDialog = ()=>{
        setShow(false)
    }
    return (
         <Modal transparent visible={show}>
             <View style={styles.wrapper}>
             <View style={styles.box}>
             <View style={{justifyContent:'flex-end',width:'100%',flexDirection:'row'}}>
             <Icon name="close-outline" color="#000" size={37}
              onPress={()=>closeDialog()}
             />
             </View>
                <Icon name="notifications" color="#F4D03F" size={55} style={styles.iconRing}/>
                <Text style={styles.textHeading}>Choose your notification</Text>
                 <View style={styles.bar}></View>
                 <Text style={styles.textContent}>You choose any method to send notification with sound or vibration</Text>
                 <View style={styles.containerBtn}>
                 <TouchableOpacity
                 style={styles.btn}
                 >
                     <Text style={{color:'#fff',fontSize:14}}>Ring a bell</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                 style={styles.btn}
                 >
                     <Text style={{color:'#fff',fontSize:14}}>Vibrate</Text>
                 </TouchableOpacity>
                 </View>
             </View>
             </View>
         </Modal>  
         
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.2)',
        justifyContent:'center',
        alignItems:'center'
    },
    bar:{
      width:"80%",
      height:1,
      backgroundColor:'#6b6b6b',
    },
    containerBtn:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:8
    },
    box:{
        width:300,
        backgroundColor:'#fff',
        shadowColor:'#0101',
        shadowOffset:{width:5,height:12},
        shadowOpacity:0.4,
        borderRadius:12,
        shadowRadius:10,
        elevation:12,
        alignItems:'center',
        padding:15
    },
    btn:{
        width:100,
        height:48,
        elevation:15,
        shadowColor:'#fff',
        shadowOffset:{width:10,height:10},
        shadowOpacity:0.5,
        shadowRadius:14,
        borderRadius:15,
        backgroundColor:'#F4D03F',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
        marginRight:15,
        marginBottom:20
    },
    iconRing:{
        marginTop:10,
        marginBottom:20
    },
    textHeading:{
        fontSize:23,
        marginBottom:15
    },
    textContent:{
        textAlign:'center',
        fontSize:14,
        marginBottom:10,
        marginTop:9
    }
})

export default DialogBox
