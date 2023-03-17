import { View, Text, SafeAreaView, StyleSheet, TextInput,  TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Login = () => {
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
                    <TextInput style={styles.textInput} placeholder={'Email Address'} />
                </View>
                <View style={[styles.borderAndWidth, styles.textInputContainer]}>
                    <TextInput style={styles.textInput} placeholder={'Password'} />
                </View>
                <View style={styles.forgotPassword}>
                    <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.borderAndWidth, styles.loginBtnContainer]}>
                    <Text style={styles.loginBtnContainerText}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.signUpLink}>
                    <Text style={styles.doNotHaveAccountText}>Don't have an account?</Text>
                    <TouchableOpacity >
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
    },
    loginTagline: {
        // borderColor: 'black',
        // borderWidth: 1,
        paddingVertical: 5,
    },
    loginTaglineText: {
        fontSize: 16,
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
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        textAlign: 'right',
    },
    loginBtnContainer: {
        padding: 8,
        backgroundColor: '#60AA59',
        borderRadius: 10,
        marginTop: 60,
    },
    loginBtnContainerText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
    },
    signUpLink: {
        marginTop: '5%',
    }, 
    doNotHaveAccountText: {
        textAlign: 'right',
    },
    signUpLinkText: {
        textAlign: 'right',
        color: '#60AA59',
    }
})

export default Login