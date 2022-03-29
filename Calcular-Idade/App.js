import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';

export default function App() {

  let [anoNascimento,setAnoNascimento] = useState('')
  let idade

  function calcularIdade() {
    anoNascimento = parseFloat(anoNascimento)
    let idade = 2022 - anoNascimento  
    alert(`Você tem ${idade} anos`)
  }

  return (


    <View style={styles.container}>

      <Text style={styles.titulo}>Calculadora de idade</Text>
      
      <TextInput placeholder='Em qual ano você nasceu?' keyboardType='numeric' style={styles.campo} onChangeText={(anoNascimento) => setAnoNascimento(anoNascimento)} />

      <TouchableOpacity style={styles.botao} onPress={calcularIdade}>
        <Text style={styles.textoBotao}>Calcular Idade</Text>
      </TouchableOpacity>

    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D77FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    textAlign:'center',
    marginTop:40,
    marginBottom:40,
    fontSize:30,
    color:'#fff'
  },

  campo:{
    backgroundColor:'#fff',
    borderRadius:10,
    margin:15,
    padding:10,
    fontSize:15
  },

  botao:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    borderRadius:10,
    backgroundColor:'#FF7F3F',
    padding:10,
  },

  textoBotao:{
    fontSize:20,
    color:'#fff'
  },
  

 
});
