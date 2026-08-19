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
            <Text>Full Name</Text>
            <TextInput
              style={styles.InputFeilds}
              placeholder='Henry Diaz'
              placeholderTextColor="#888"
            />
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
    InputFeilds:{
      borderColor:'#E2E8F0',
    borderRadius:8,
    borderWidth:1,
    padding:13,
    },
})
export default SignUp