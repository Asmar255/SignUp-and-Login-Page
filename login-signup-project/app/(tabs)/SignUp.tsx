import { Text, View,StyleSheet,Pressable, TextInput } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';


export class SignUp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        {/* header */}
        <View style={styles.flexHeader}>
          <Pressable style={({pressed})=>pressed && {opacity:0.6}}>
            <AntDesign name="arrow-left" size={27} color="#3B30E8" /></Pressable>
          <Text style={styles.headerText}>Welcome</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* card section */}
        <View style={styles.cardFlex}>
          {/* card heading */}
          <View>
            <Text style={styles.heading1}>Create Account.</Text>
            <Text style={styles.heading2}>Join Our Community Today</Text>
          </View>
          
          {/* input feilds section*/}
          <View>
            <Text style={styles.InputText}>Full Name</Text>
            <TextInput
              style={styles.InputFeilds}
              placeholder='Henry Diaz'
              placeholderTextColor="#888"
            />

            <Text style={styles.InputText}>Email Address</Text>
            <TextInput
              style={styles.InputFeilds}
              placeholder='name@example.com'
              placeholderTextColor="#888"
            />

            <Text style={styles.InputText}>Passward</Text>
            <View style={styles.inputFlex}>
              <TextInput
              style={styles.InputFeilds}
              placeholder='••••••••'
              placeholderTextColor="#888"
            />
            <Pressable style={styles.eyeicons}>
                <AntDesign name="eye" size={24} color="black " />
            </Pressable>
            </View>
          </View>

          {/* Signup button */}
          <View>
            <Pressable 
            style={({pressed})=>[styles.Signupbtn, pressed && {opacity:0.6 } ]}
            >
                <Text style={styles.textbtn}>Sign Up</Text>
            </Pressable>
          </View>

          {/* OR Line*/}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.line} />
          </View>

          {/* Login line */}
          <View style={styles.flexLast}>
            <Text>Already Have a Account.</Text>
            <Text style={styles.textlast}>Login</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  // header
  flexHeader:{
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor:"#FFF",
  },
  headerText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B30E8',
  },
  // card
  cardFlex:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ffffff',
    borderRadius:10,
    width:'90%',
    padding:10,
    margin:'auto'
  },
    // card headings
    heading1:{
      fontWeight:'bold',
      color:'#000000',
      fontSize:26,
      margin:'auto'
    },
    heading2:{
      color:'#b1b4b8',
      fontSize:18,
      margin:'auto',
      marginTop:1,
    },
    // card inputs
    InputFeilds:{
    borderColor:'#E2E8F0',
    borderRadius:8,
    borderWidth:1,
    padding:13,
    width:'100%'
    },
    InputText:{
      fontWeight:'bold',
      marginTop:25,
      marginBottom:10,
    },
    inputFlex:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
    },
    eyeicons:{
      marginLeft:20,
    },

    // Signup BUtton
    Signupbtn:{
    marginTop:30,
    backgroundColor:'#3B30E8',
    borderRadius:8,
    borderWidth:1,
    padding:13,
    width:'100%'
    },
    textbtn:{
      color:'#fff',
      margin:'auto',
      fontSize:20,
    },

    // Or Line
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

    // Login Line
    flexLast:{
    marginTop:20,
    flexDirection:'row',
    gap:8,
    alignItems:'center',
    justifyContent:'center'
    },
    textlast:{
      color:'#4169E1',
    }
})
export default SignUp