import { StyleSheet,Text, View, TextInput } from 'react-native'
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
  },
  default:{
    color:'#0b0000'
  },
  card:{
    width:'auto',
    backgroundColor: '#FFFFFF',
  },
  input:{
    borderColor:'#E2E8F0',
    borderRadius:8,
    borderWidth:1,
    paddingHorizontal:10,
  }
})
export default Login