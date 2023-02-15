import React from 'react';
import { Text, View,ImageBackground,Image, TextInput} from 'react-native';

const Login = () => {

  return (
    <View style={{ flex: 1,}}>
  <ImageBackground style={{width:'100%',height:300}} source={require('../Assets/Image/bg.jpeg')}>
    <View style={{alignItems:'center',top:15}}>
   <Image style={{width:'50%',height:150,}} source={require('../Assets/Image/khan.png')}></Image>
   </View>

   <View style={{alignItems:'center',top:25}}>
    <View style={{width:'90%',height:300,backgroundColor:'#e3d5d5'}}>
     <Text style={{fontSize:30,color:'black',padding:10}}>Login</Text> 
     <TextInput style={{backgroundColor:'white',borderRadius:25,padding:5,fontSize:22,}}>Email</TextInput>

     <TextInput style={{backgroundColor:'white',borderRadius:25,padding:5,fontSize:22,top:10}}>password</TextInput>
     <Image style={{width:20,height:20,position:'absolute',right:15,top:120}} source ={require('../Assets/Image/lock.png')}></Image>
     
     <Text style={{fontSize:15,color:'black',top:10,textAlign:'center',left:100}}>forgot password</Text>

     <Text style={{textAlign:'center',top:25,fontSize:15,color:'black'}}>or</Text>
    
    </View>
    </View> 
  </ImageBackground>
    </View>
  );
}

export default Login;