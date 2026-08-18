import { StyleSheet,Text, View, TextInput, Pressable, Alert } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.Title}>Welcome</Text>
          <Text style={styles.subTitle}>Sign in to continue</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.default}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="hello@example.com"
              placeholderTextColor="#888"
            />
            <Text style={styles.default}>Passward</Text>
            <TextInput
            style={styles.input}
            placeholder="Passward"
            placeholderTextColor="#888"
            />
            <Text style={styles.Passward}>Forget Passward?</Text>
            <Pressable 
            style={({pressed})=>[
              styles.loginBtn, pressed && styles.btnpressed
            ]}
            >
              <Text style={styles.btntxt}>Login</Text>
            </Pressable>
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.line} />
            </View>
        </View>
      </SafeAreaView>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#d2d7e0',
    justifyContent: 'center',   
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',    
  },
  Title:{
    fontSize:27,
    fontWeight:'bold',
  },
  subTitle:{
    fontSize:18,
    color:'#677795',
    marginBottom:10,
  },
  default:{
    color:'#0b0000',
    fontWeight:'500',
    paddingTop:5,
  },
  card:{
    width:'90%',
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10,
  },
  input:{
    borderColor:'#E2E8F0',
    borderRadius:8,
    borderWidth:1,
    padding:13,
  },
  Passward:{
    color:'#4169E1',
    fontWeight:'700',
    marginLeft:'auto',
    marginTop:3,
    marginBottom:17,
  },
  loginBtn:{
    backgroundColor:'#1d51ec',
    borderRadius:8,
    padding:13,
  },
  btnpressed:{
    opacity:0.7,
  },
  btntxt:{
    color:"#ffff",
    margin:'auto'
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,                
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    marginHorizontal: 12,    
    color: '#888888',
    fontSize: 14,
  },
})
export default Login