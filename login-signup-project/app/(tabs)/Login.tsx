import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { loginUser } from '@/components/auth';
import { useState } from 'react';


export default function Login() {

  const router = useRouter()

  //hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  // Login function 
  const handleLogin = () => {
    
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password.')
      return
    }

    const result = loginUser(email, password)
    
    if (result.success) {
      Alert.alert(`success`, result.message)
      setEmail('')
      setPassword('')
    }
    else {
      
      console.log('about to show alert')
Alert.alert('Test', 'This is a test alert')
      Alert.alert('Login Failed', result.message)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* main heading */}
      <View style={styles.textContainer}>
        <Text style={styles.Title}>Welcome</Text>
        <Text style={styles.subTitle}>Sign in to continue</Text>
      </View>
      {/* card section */}
      <View style={styles.card}>
        <Text style={styles.default}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="hello@example.com"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.default}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
          />
          <Pressable
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIconContainer}
          >
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#888"
            />
          </Pressable>
        </View>
        <Text style={styles.Passward}>Forget Passward?</Text>
        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [
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

        {/* ggole and apple buttons */}
        <View style={styles.btnflex}>
          <View style={[styles.flex, styles.btnBottom]}>
            <AntDesign name="google" size={24} color="black" />
            <Text>Google</Text>
          </View>
          <View style={[styles.flex, styles.btnBottom]}>
            <AntDesign name="apple" size={24} color="black" />
            <Text>Apple</Text>
          </View>
        </View>
      </View>
      {/* last line */}
      <View style={styles.flexLast}>
        <Text>Don't have an account?</Text>
        <Pressable
          onPress={() => router.push('/SignUp')}
        >
          <Text style={styles.textlast}>Sign up</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  Title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#3B30E8',
  },
  subTitle: {
    fontSize: 18,
    color: '#677795',
    marginBottom: 10,
  },
  default: {
    color: '#0b0000',
    fontWeight: '500',
    paddingTop: 5,
  },
  card: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    borderColor: '#E2E8F0',
    borderRadius: 8,
    borderWidth: 1,
    padding: 13,
  },
  inputPassword: {
    borderColor: '#E2E8F0',
    borderRadius: 8,
    borderWidth: 1,
    padding: 13,
    flex:1,
  },
  Passward: {
    color: '#4169E1',
    fontWeight: '700',
    marginLeft: 'auto',
    marginTop: 3,
    marginBottom: 17,
  },
  loginBtn: {
    backgroundColor: '#1d51ec',
    borderRadius: 8,
    padding: 13,
  },
  btnpressed: {
    opacity: 0.7,
  },
  btntxt: {
    color: "#ffff",
    margin: 'auto',
    fontSize:16,
    fontWeight:'bold'
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
  //bottom buttons
  flex: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  btnflex: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 100
  },
  btnBottom: {
    borderColor: '#E2E8F0',
    borderRadius: 10,
    borderWidth: 2,
    padding: 8,
  },
  flexLast: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textlast: {
    color: '#4169E1',
  },
  eyeIconContainer: {
    paddingHorizontal: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})
