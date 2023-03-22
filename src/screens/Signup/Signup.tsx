import { View, Text, SafeAreaView, StyleSheet, TextInput,  TouchableOpacity, Image } from 'react-native'
import React, {useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {

    // All the useStates are here
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pincode, setPincode] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [uriImage, setUriImage] = useState(`https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png`)

    // All the ref's are here
    const emailRef = useRef()
    const passwordRef = useRef()
    const pinRef = useRef()

    // Navigation
    const navigator = useNavigation();
    const signInBtn = () => {
        navigator.navigate("Login")
    }

    // All the regular expressions are here
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

     // Checkers
     const usernameCheck  = username.length > 0 
     const emailCheck  = email.length > 0 && (emailRegEx.test(email))
     const passwordCheck  = password.length > 0 && (passwordRegEx.test(password))
     const pincodeCheck  = pincode.length === 6

    // On Press Functions
    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry)
        setUriImage(secureTextEntry ? `https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png` : `https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png`)
    }

    const forOpacity = (usernameCheck && emailCheck && passwordCheck && pincodeCheck) ? styles.forOpacityEnabled : styles.forOpacityDisabled;

  return (
    <SafeAreaView style={styles.signupParentContainer}>
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
                    <Text style={styles.headingText}>Sign up</Text>
                </View>
                <View style={[styles.borderAndWidth, styles.signupTagline]}>
                    {/* <Text style={styles.loginTaglineText}>Sign in now to access your exercises and saved music</Text> */}
                    <Text style={styles.signupTaglineText}>To proceed with an order, please log in or register an account</Text>
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer]}>
                    <TextInput style={styles.textInput} returnKeyType={'next'} placeholder={'Your Username'} onChangeText={val => {setUsername(val)}} onSubmitEditing={() => emailRef.current.focus()} />
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer]}>
                    <TextInput style={styles.textInput} keyboardType={'email-address'} returnKeyType={'next'} placeholder={'Email Address'} onChangeText={val => {setEmail(val)}} ref={emailRef} onSubmitEditing={()=>passwordRef.current.focus()} />
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer, styles.passwordContainer]}>
                    <TextInput style={styles.passwordInput} returnKeyType={'next'} secureTextEntry={secureTextEntry} placeholder={'Password'} onChangeText={val => {setPassword(val)}} ref={passwordRef} onSubmitEditing={()=>pinRef.current.focus()} />
                    
                    <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeContainer}>
                        <Image style={styles.eye} source={{uri: uriImage}} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer]}>
                    <TextInput style={styles.textInput} placeholder={'Pincode'} keyboardType={'numeric'} onChangeText={val => {setPincode(val)}} ref={pinRef} />
                </View>
                <TouchableOpacity style={[styles.borderAndWidth, styles.signupBtnContainer, forOpacity]}>
                    <Text style={styles.signupBtnContainerText}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.signinLink}>
                    <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={signInBtn} >
                        <Text style={styles.signinLinkText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Text>Signup</Text> */}
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    // borderAndWidth: {
    //         borderColor: 'black',
    //         borderWidth: 1,
    //     },
    signupParentContainer: {
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
        // fontFamily: 'SF-UI-Display-Bold',
        fontFamily: 'Poppins-Regular',
    },
    signupTagline: {
        // borderColor: 'black',
        // borderWidth: 1,
        paddingVertical: 5,
    },
    signupTaglineText: {
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
    signupBtnContainer: {
        padding: 8,
        backgroundColor: '#60AA59',
        borderRadius: 10,
        marginTop: 60,
    },
    signupBtnContainerText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins-Medium',
    },
    forOpacityEnabled: {
        opacity: 1,
      },
      forOpacityDisabled: {
        opacity: 0.5,
      },
    signinLink: {
        marginTop: '5%',
    }, 
    alreadyHaveAccountText: {
        textAlign: 'right',
        fontFamily: 'Poppins-Regular',
    },
    signinLinkText: {
        textAlign: 'right',
        color: '#60AA59',
        fontFamily: 'Poppins-Regular',
    }
})

export default Signup