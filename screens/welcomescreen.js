import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import SantaAnimation from '../components/SantaClaus';

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            emailID: '',
            password: ''
        }
    }

    login=(emailID, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailID, password)
        .then(()=>{
            return alert('Successfully logged in')
        })
        .catch((error)=>{
            var errorMessage = error.message
            return alert(errorMessage)
        })
    }

    signUp=(emailID, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailID, password)
        .then(()=>{
            return alert('User added successfully')
        })
        .catch((error)=>{
            var errorMessage = error.message
            return alert(errorMessage)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Text style={styles.title}> Barter System </Text>
                </View>
                <View style={styles.button}>
                    <TextInput
                    style={styles.loginBox}
                    placeholder= 'enter email Id'
                    placeholderTextColor= 'orange'
                    keyboardType= 'email-address'
                    onChangeText={(text)=>{this.setState({emailID: text})}}
                    />

                    <TextInput
                    style={styles.loginBox}
                    placeholder= 'enter password'
                    placeholderTextColor= 'orange'
                    secureTextEntry={true}
                    onChangeText={(text)=>{this.setState({password: text})}}
                    />

                    <TouchableOpacity 
                    style={[styles.button, {marginBottom: 20, marginTop: 20}]}
                    onPress={()=>{this.login(this.state.emailID, this.state.password)}}
                    >
                    <Text style={styles.buttonText}> Login </Text>    
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.signUp(this.state.emailID, this.state.password)}}
                    >
                    <Text style={styles.buttonText}> Sign Up </Text>    
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F8BE85'
    },
    profile:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 65,
        fontWeight: '300',
        paddingBottom: 30,
        color: '#FF3D00'
    },
    loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#FF8A65',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    },
    button:{
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#FF9800',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.30,
        elevation: 16
    },
    buttonText:{
        color: '#FFF',
        fontWeight: '200',
        fontSize: 20
    }
})