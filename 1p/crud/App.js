import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import {Input} from 'react-native-elements';
import {collection, addDoc, doc, getDoc, getDocs} from 'firebase/firestore';
import { db } from './firebase_config';

export default function App () {
    const [data, setdata] = useState({
      username:"",
      email:"",
      psw:"",
      psw2:"",
      createdAt: new Date(),
    });

    const changeText = (key, value) => {
      setdata({...data, [key]: value});
    }

    const Agregar = () => {
      if(data.psw != data.psw2){
        Alert.alert('La contraseña debe de coincidir...')
      }else if(data.username == '' || data.email == ''){
        Alert.alert('Nombre de usuario y/o emali, son obligatorios.!')
       }else{
          onSend(data);
      }
    }

    const onSend = async() => {
      const docRef = await addDoc(collection(db, 'usuarios'),data);
    }

    /*
    //Submit data with function
    function onSend() {
      //Submit Data 
      addDoc(collection(db, "usuarios"), data).then(() => { 
        // Data saved successfully!
        console.log('data submitted', data);  
  
      }).catch((error) => {
            // The write failed...
            console.log(error);
      }).then(() => {
        Alert.alert('Data Submitted')
      });
    }
    */
   
    /*
    const onUsersDB = async () => {
      const docRef = doc(db, "usuarios");
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
    */


    const allUsers = async() => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));

      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <View>
        <Input placeholder='Nombre usuario' style={styles.input} onChangeText={(value) => changeText('username', value)} value={data.username}/>
      </View>
      <View>
        <Input placeholder='Correo electrónico' style={styles.input} onChangeText={(value) => changeText('email', value)}/>
      </View>
      <View>
        <Input placeholder='Contraseña' style={styles.input} onChangeText={(value) => changeText('psw', value)} secureTextEntry={true}/>
      </View>
      <View>
        <Input placeholder='Confirma contraseña' style={styles.input} onChangeText={(value) => changeText('psw2', value)} secureTextEntry={true}/>
      </View>
      <View>
        <Button onPress={() => {Agregar()}} title="Enviar datos"/>
      </View>
      <View>
        <Button onPress={() => {allUsers();}} title="Ver datos"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});