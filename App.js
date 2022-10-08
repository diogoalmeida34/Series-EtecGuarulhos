import * as react from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  return (
      <View style={estilo.container}>
          <Text style={estilo.titulo}>{'\n'}Séries Legais</Text>
          <Text style={estilo.subTitulo}>Estas são as melhores das melhores{'\n'}</Text>

          <ScrollView>
            <Text style={estilo.lista}>1. The Big Bang: A teoria</Text>
            <View>
              <Image style={estilo.serie} source={require("./assets/big_bang.jpg")}></Image>
            </View>

            <Text style={estilo.lista}>2. Dois homens e Meio</Text>
            <View>
              <Image style={estilo.serie} source={require("./assets/doishomens.jpg")}></Image>
            </View>

            <Text style={estilo.lista}>3. Todo mundo odeia o Chris</Text>
            <View>
              <Image style={estilo.serie} source={require("./assets/chris.jpeg")}></Image>
            </View>
          </ScrollView>
      </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#B20710",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll"
},
  titulo: {
    fontSize: 40,
    color: "#FFF",
    fontWeight:"900",
    marginBottom: 25,
    textAlign: "center"          
  },
  subTitulo: {
    fontSize: 20,
    color: "#fff",
    marginHorizontal: 2,
    textAlign: "center"          
  },
  lista: {
    color: "#fff",
    textAlign: "center"
  },
  serie: {
    width: 300,
    height: 400,
    marginTop: 12,
    marginBottom: 20,
    textAlign: "center"
  }
})