import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput,  TouchableOpacity, Image } from 'react-native'


const ForgotPassword = () => {

    // All the useStates are here 
    const [email, setEmail] = useState('');

    // Navigation
  const navigator = useNavigation();
    const signUpBtn = () => {
        navigator.navigate("Signup")
    }
    const signInBtn = () => {
        navigator.navigate("Login")
    }

    // Regular Expressions
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Checkers
    const emailCheck  = email.length > 0 && (emailRegEx.test(email))

    // On press Functions
    // const forOpacity = email.length > 0 ? styles.forOpacityEnabled : styles.forOpacityDisabled;
    const forOpacity = emailCheck ? styles.forOpacityEnabled : styles.forOpacityDisabled;

  return (
    <SafeAreaView style={styles.forgotPasswordParentContainer}>
        <View style={[styles.borderAndWidth, styles.container]}>
            <View style={[styles.borderAndWidth, styles.content]}>
                <View style={[styles.borderAndWidth, styles.logo]}>
                {/* <Text>Logo</Text> */}
                {/* <Image source={require('./assets/logo.png')} /> */}
                <Image style={styles.image} source={{uri: 
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdiXXGDu9NPbdpA3lZFJ9MmGqFlUdRStY1w&usqp=CAU'
    }} />
                </View>
                <View style={[styles.borderAndWidth, styles.heading]}>
                    <Text style={styles.headingText}>Forgot Password</Text>
                </View>
                <View style={[styles.borderAndWidth, styles.forgotPasswordTagline]}>
                    {/* <Text style={styles.loginTaglineText}>Sign in now to access your exercises and saved music</Text> */}
                    <Text style={styles.forgotPasswordTaglineText}>You will receive an email, after entering the email and proceed</Text>
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer]}>
                    <TextInput style={styles.textInput} placeholder={'Email Address'} onChangeText={val => {setEmail(val)}} />
                </View>
                
                <TouchableOpacity style={[styles.borderAndWidth, styles.forgotPasswordBtnContainer, forOpacity]}>
                    <Text style={styles.forgotPasswordBtnContainerText}>Forgot Password</Text>
                </TouchableOpacity>

                <View style={styles.navigationLink}>
                    <Text style={styles.goToText}>Now, go to:</Text>
                    <TouchableOpacity onPress={signUpBtn}>
                        <Text style={styles.navigationLinkText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signInBtn}>
                        <Text style={styles.navigationLinkText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Text>Login</Text> */}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // borderAndWidth: {
  //     borderColor: 'black',
  //     borderWidth: 1,
  // },
  forgotPasswordParentContainer: {
      // backgroundColor: 'grey',
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
  },
  container: {
      // borderColor: 'black',
      // borderWidth: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  content: {
      // borderColor: 'black',
      // borderWidth: 1,
      width: '90%',
  },
  logo: {
      //  borderColor: 'black',
      // borderWidth: 1,
      marginBottom: 20,
  },
  image: {
      height: 50,
      width: 50,
  },
  heading: {
      // borderColor: 'black',
      // borderWidth: 1,
  },
  headingText: {
      fontSize: 30,
      color: 'black',
      paddingVertical: 5,
      fontFamily: 'Poppins-Regular',
  },
  forgotPasswordTagline: {
      // borderColor: 'black',
      // borderWidth: 1,
      paddingVertical: 5,
  },
  forgotPasswordTaglineText: {
      fontSize: 16,
      fontFamily: 'Poppins-Light',
  },
  textInputContainer: {
      // borderColor: 'black',
      // borderWidth: 1,
  },
  textInput: {
      // borderBottomColor: 'black',
      borderBottomColor: 'rgb(0,159,59)',
      borderBottomWidth: 1,
      marginTop: 5,
      fontFamily: 'Poppins-Regular',
  },
  forgotPassword: {
      marginTop: 10,
  },
  forgotPasswordText: {
      textAlign: 'right',
      fontFamily: 'Poppins-Regular',
  },
  forgotPasswordBtnContainer: {
      padding: 8,
      backgroundColor: '#60AA59',
      borderRadius: 10,
      marginTop: 60,
  },
  forgotPasswordBtnContainerText: {
      textAlign: 'center',
      fontSize: 25,
      color: 'white',
      fontFamily: 'Poppins-Regular',
  },
  forOpacityEnabled: {
    opacity: 1,
  },
  forOpacityDisabled: {
    opacity: 0.5,
  },
  navigationLink: {
      marginTop: '5%',
  }, 
  goToText: {
      textAlign: 'right',
      fontFamily: 'Poppins-Regular',
  },
  navigationLinkText: {
      textAlign: 'right',
      color: '#60AA59',
      fontFamily: 'Poppins-Regular',
  }
})

export default ForgotPassword