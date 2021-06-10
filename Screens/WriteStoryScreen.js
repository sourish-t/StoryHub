import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Button } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'
import {keyBoardAvoidingView,ToastAndroid} from 'react-native'

export default class WriteStoryScreen extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      title:'',
      author:'',
      story:''
    }
  }
    render(){
      
        return (
          <KeyboardAvoidingView>
        <View style={styles.container}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Write Your Story Here',
            style: { color: 'Black', fontSize: 15 },
          }}
        />

        <TextInput

        style={styles.title}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}

        />

        <TextInput
        
        style={styles.Author}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        
        />

        <TextInput
        
        style={styles.writeStory}
          onChangeText={text => {
            this.setState({ text: text });
            multiline:{true}
          }}
          value={this.state.text}
        
        />

        <TouchableOpacity styles = {styles.submitButton}>

              onPress={this.submitStory}

         </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>
        )

    }

    submitStory=()=>{

      db.collection("stories").add({
        title:this.state.title,
        author:this.state.author,
        story:this.state.story
      })

      this.setState({
        title:'',
        author:'',
        story:''

      })

      ToastAndroid.show("Your Story Has Been Published!", ToastAndroid.SHORT,ToastAndroid.TOP)
      
    }
}

const styles = StyleSheet.create ({

    container:{
        flex: 1,
    backgroundColor: 'cyan',
    },

    title:{
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    },

    Author:{
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    },

    writeStory:{

    marginTop: 150,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    },

    submitButton:{
      width:20,
      height:30,
      textAlign:"center",
      marginTop:450,
      marginRight:400,
      backgroundColor:"cyan"
    }
    
})