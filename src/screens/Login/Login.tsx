import { View, Text, SafeAreaView, StyleSheet, TextInput,  TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, {useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    // All the useStates are here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [uriImage, setUriImage] = useState(`https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png`)

    // All the ref's are here
    const passwordRef = useRef()
    
    // Navigation
    const navigator = useNavigation();
    const signUpBtn = () => {
        navigator.navigate("Signup")
    }
    const forgotPasswordBtn = () => {
        navigator.navigate("ForgotPassword")
    }

     // All the regular expressions are here
     const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
 
      // Checkers
      const emailCheck  = email.length > 0 && (emailRegEx.test(email))
      const passwordCheck  = password.length > 0 && (passwordRegEx.test(password))

    // On Press Functions
    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry)
        setUriImage(secureTextEntry ? `https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png` : `https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png`)
    }

    const forOpacity = (emailCheck && passwordCheck) ? styles.forOpacityEnabled : styles.forOpacityDisabled;

  return (
    <SafeAreaView style={styles.loginParentContainer}>
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
                    <Text style={styles.headingText}>Sign in</Text>
                </View>
                <View style={[styles.borderAndWidth, styles.loginTagline]}>
                    {/* <Text style={styles.loginTaglineText}>Sign in now to access your exercises and saved music</Text> */}
                    <Text style={styles.loginTaglineText}>To proceed with an order, please log in or register an account</Text>
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer]}>
                    <TextInput style={styles.textInput} returnKeyType={'next'} onSubmitEditing={()=>passwordRef.current.focus()} keyboardType={'email-address'} placeholder={'Email Address'} onChangeText={val => {setEmail(val)}} />
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer, styles.passwordContainer]}>
                    <TextInput style={styles.passwordInput} secureTextEntry={secureTextEntry} placeholder={'Password'} onChangeText={val => {setPassword(val)}} ref={passwordRef} />
                    <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeContainer}>
                    {/* <Image style={styles.eye} source={{uri: `https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png`}} /> */}
                    <Image style={styles.eye} source={{uri: uriImage}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.forgotPassword}>
                    <TouchableOpacity onPress={forgotPasswordBtn}>
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.borderAndWidth, styles.loginBtnContainer, forOpacity]}>
                    <View style={[styles.loginBtnTextContainer, styles.borderAndWidth]}>
                        <Text style={styles.loginBtnContainerText}>SIGN IN</Text>
                    </View>
                    <View style={[styles.loginBtnActivityIndicatorContainer, styles.borderAndWidth]}>
                        <ActivityIndicator size="small" />
                    </View>
                </TouchableOpacity>
                <View style={styles.signUpLink}>
                    <Text style={styles.doNotHaveAccountText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={signUpBtn} >
                        <Text style={styles.signUpLinkText}>Sign Up</Text>
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
    loginParentContainer: {
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
    loginTagline: {
        // borderColor: 'black',
        // borderWidth: 1,
        paddingVertical: 5,
    },
    loginTaglineText: {
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
    passwordContainer: {
        flexDirection: 'row',
    },
    passwordInput: {
        borderBottomColor: 'rgb(0,159,59)',
        borderBottomWidth: 1,
        marginTop: 5,
        flex: 1,
    },
    eyeContainer: {
        borderBottomColor: 'rgb(0,159,59)',
        borderBottomWidth: 1,
    },
    eye: {
        height: 27,
        width: 27,
        marginTop: 15,
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        textAlign: 'right',
        fontFamily: 'Poppins-Regular',
    },
    loginBtnContainer: {
        padding: 8,
        backgroundColor: '#60AA59',
        borderRadius: 10,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginBtnTextContainer: {
        width: '90%',
        // justifyContent: 'flex-end',
    },
    loginBtnContainerText: {
        textAlign: 'center',
        fontSize: 25,
        marginLeft: 33,
        color: 'white',
        fontFamily: 'Poppins-Medium',
    },
    loginBtnActivityIndicatorContainer: {
        justifyContent: "center",
        width: '10%',
    },
    forOpacityEnabled: {
        opacity: 1,
      },
    forOpacityDisabled: {
        opacity: 0.5,
    },
    signUpLink: {
        marginTop: '5%',
    }, 
    doNotHaveAccountText: {
        textAlign: 'right',
        fontFamily: 'Poppins-Regular',
    },
    signUpLinkText: {
        textAlign: 'right',
        color: '#60AA59',
        fontFamily: 'Poppins-Regular',
    }
})

export default Login