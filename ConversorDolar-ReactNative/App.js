import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

  let [real,setReal] = useState('');
  let [cotDollar,setCotDollar] = useState('');
  let [total] = useState('');

  function converter() {
    real = parseFloat(real)
    cotDollar = parseFloat(cotDollar)
    total = real /cotDollar
    alert(`Você tem ${total}$ dólares`)
  }


  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Conversor de dólares</Text>
    
      <Image style={{width: 200, height:200, borderRadius: 25, marginTop:7,}}
     source={{uri: 'https://conteudo.imguol.com.br/c/noticias/e9/2021/02/25/real-registrou-forte-desvalorizacao-frente-do-dolar-no-ano-passado-1614248929569_v2_900x506.jpg.webp'}}/>

     <TextInput placeholder= 'Digite a cotação do dólar' style={styles.campo} onChangeText={(cotDollar) => setCotDollar(cotDollar)} />

     <TextInput placeholder= 'Digite a quantia de reais' style={styles.campo} onChangeText={(real) => setReal(real)} />

     <TouchableOpacity style={styles.botao} onPress={converter}>
       <Text style={styles.botao}>Converter</Text>
     </TouchableOpacity>

    </View>





  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#97DBAE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
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
    backgroundColor:'#F4BBBB',

  },

  textoBotao:{
    color:'#fff'
  }

});
