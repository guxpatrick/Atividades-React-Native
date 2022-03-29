import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';




export default function App() {

  let [Temp,setTemp] = useState('');
  let [f,setF,c,setC] = useState('');
  /* Js */

  function CalcularFahrenheit() {
    f = (9 * parseFloat(Temp) + 160) / 5
    
    alert (`A temperatura em Fahrenheit é: ${f}`)
  }

  function CalcularCelsius() {
    c = ( parseFloat(Temp) - 32) * 5/ 9
    
    alert (`A temperatura em Celsius é: ${c}`)
  }





/* Construção do app*/
  return (
    <View style={styles.container}>
     
    <Text style={styles.titulo}>Conversor de Temperaturas</Text> 

    <Image style={{width: 200, height:200, borderRadius: 25, marginTop:7,}}
     source={{uri: 'https://img.freepik.com/vetores-gratis/termometro-quente-e-frio-termometros-de-temperatura-com-escala-celsius-e-fahrenheit-icone-de-meteorologia-do-termostato_176516-112.jpg?w=826'}}/> 

    <TextInput placeholder='Digite a temperatura' keyboardType='numeric' style={styles.campo} onChangeText={(Temp) => setTemp(Temp)} />

    <TouchableOpacity style={styles.botao} onPress={CalcularFahrenheit} >
        <Text style={styles.textoBotao}>Calcular Celsius para Fahrenheit</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.botao} onPress={CalcularCelsius}>
        <Text style={styles.textoBotao}>Calcular Fahrenheit para Celsius</Text>
    </TouchableOpacity>

    </View>
  );
}



/* CSS */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ccc',
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
