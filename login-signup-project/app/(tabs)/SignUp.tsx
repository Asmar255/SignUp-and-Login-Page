import { Text, View, StyleSheet, Pressable, TextInput, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { regUser } from '@/components/auth'
import Feather from '@expo/vector-icons/Feather'

export default function SignUp() {
  const router = useRouter()
  // States
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  // Signup function
  const handleSignUp = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all the fields')
      return
    }

    const result = regUser(name, email, password)

    if (result.success) {
      Alert.alert('Success', result.message, [
        {
          text: 'OK',
          onPress: () => router.push('/Login'),
        },
      ])
      setName('')
      setEmail('')
      setPassword('')
    } else {
      Alert.alert('SignUp failed', result.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* header */}
          <View style={styles.flexHeader}>
            <Pressable 
              onPress={() => router.back()}
              style={({ pressed }) => pressed && { opacity: 0.6 }}
            >
              <AntDesign name="arrow-left" size={27} color="#3B30E8" />
            </Pressable>
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
            
            {/* input fields section */}
            <View>
              <Text style={styles.InputText}>Full Name</Text>
              <TextInput
                style={styles.InputFields}
                placeholder="Henry Diaz"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.InputText}>Email Address</Text>
              <TextInput
                style={styles.InputFields}
                placeholder="name@example.com"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />

              <Text style={styles.InputText}>Password</Text>
              <View style={styles.inputFlex}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  placeholderTextColor="#888"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize="none"
                />
                <Pressable
                  onPress={() => setIsPasswordVisible((prev: boolean) => !prev)}
                  style={styles.eyeicons}
                >
                  <Feather
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    size={22}
                    color="#888"
                  />
                </Pressable>
              </View>
            </View>

            {/* Signup button */}
            <View>
              <Pressable 
                onPress={handleSignUp}
                style={({ pressed }) => [styles.Signupbtn, pressed && { opacity: 0.6 }]}
              >
                <Text style={styles.textbtn}>Sign Up</Text>
              </Pressable>
            </View>

            {/* OR Line */}
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.line} />
            </View>

            {/* Login line */}
            <View style={styles.flexLast}>
              <Text>Already Have an Account?</Text>
              <Pressable onPress={() => router.push('/Login')}>
                <Text style={styles.textlast}>Login</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  flexHeader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B30E8',
  },
  cardFlex: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '90%',
    padding: 16,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  heading1: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 26,
    textAlign: 'center',
  },
  heading2: {
    color: '#b1b4b8',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 2,
  },
  InputFields: {
    borderColor: '#E2E8F0',
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    width: '100%',
  },
  InputText: {
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 6,
  },
  inputFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e0e2e4',
    borderRadius: 8,
    borderWidth: 1,
  },
  passwordInput: {
    padding: 12,
    width:'90%'
  },
  eyeicons: {
       paddingRight: 1,
  },
  Signupbtn: {
    marginTop: 24,
    backgroundColor: '#3B30E8',
    borderRadius: 8,
    padding: 13,
    width: '100%',
  },
  textbtn: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
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
  flexLast: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textlast: {
    color: '#4169E1',
    fontWeight: 'bold',
  },
})