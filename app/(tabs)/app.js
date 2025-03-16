import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>
          Brasileiro Série A
        </Text>

        
        <CardTime
          nomeTime="Nome: São Paulo                          Ano: 1930                     Titulos:39"
          escudo="https://clubedosfanaticos.wordpress.com/wp-content/uploads/2011/12/sao-paulo.jpg?w=584"
        />

       
        <Text style={styles.subtitulo}>Jogadores do São Paulo:</Text>
        <CardJogador
          nomeJogador="Calleri"
          time="São Paulo"
          descricao="Posição: Atacante | Nacionalidade: Argentina"
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jonathan-Calleri-Sao-Paulo-Juventude-jun-2022_%28cropped%29.jpg/800px-Jonathan-Calleri-Sao-Paulo-Juventude-jun-2022_%28cropped%29.jpg"
        />
        <CardJogador
          nomeJogador="Oscar"
          time="São Paulo"
          descricao="Posição: Meio-campo | Nacionalidade: Brasileiro"
          imagem="https://www.ogol.com.br/img/jogadores/new/47/77/64777_oscar_20250109175250.jpg"
        />
        <CardJogador
          nomeJogador="Lucas Moura"
          time="São Paulo"
          descricao="Posição: Meio-campo | Nacionalidade: Brasileiro"
          imagem="https://a.espncdn.com/photo/2023/0803/r1205558_1296x729_16-9.jpg"
        />

       
        <CardTime
          nomeTime="Nome: Vasco                               Ano: 1898                 Titulos:39"
          escudo="https://mercadohoje.uai.com.br/wp-content/uploads/2022/02/venda-vasco-1280x720.jpg"
        />

        
        <Text style={styles.subtitulo}>Jogadores do Vasco:</Text>
        <CardJogador
          nomeJogador="Philippe Coutinho"
          time="Vasco"
          descricao="Posição: Meio-campo | Nacionalidade: Brasileiro"
          imagem="https://imagens.ebc.com.br/IobClYCj7GjG33Mw7vfsRF7p6rA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/07/10/coutinho_vasco_foto_2.jpg?itok=fSiyEy4V"
        />
        <CardJogador
          nomeJogador="Vegetti"
          time="Vasco"
          descricao="Posição: Atacante | Nacionalidade: Argentina"
          imagem="https://lncimg.lance.com.br/cdn-cgi/image/width=850,quality=75,format=webp/uploads/2024/09/vegetti-vasco-cruzeiro-1920x1280.jpg"
        />
<CardJogador
          nomeJogador="Leo Jardim"
          time="Vasco"
          descricao="Posição: Goleiro | Nacionalidade: Brasileiro"
          imagem="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/03/21/1580547549-leo-jardim.jpg"
        />

        
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Escudo_S%C3%A3o_Paulo_FC.svg/1200px-Escudo_S%C3%A3o_Paulo_FC.svg.png" }}
          style={styles.imagemExtra}
        />
      </ScrollView>
    );
  }
}

class CardTime extends Component {
  render() {
    return (
      <View style={styles.cardTime}>
        <Image
          source={{ uri: this.props.escudo }}
          style={styles.imagemEscudo}
        />
        <Text style={styles.nomeTime}>{this.props.nomeTime}</Text>
      </View>
    );
  }
}

class CardJogador extends Component {
  render() {
    return (
      <View style={styles.cardJogador}>
        <View style={styles.jogadorInfo}>

          <Image source={{ uri: this.props.imagem }} style={styles.imagemJogador} />
          <View style={styles.infoJogador}>
            <Text style={styles.nomeJogador}>{this.props.nomeJogador}</Text>
            <Text style={styles.time}>{this.props.time}</Text>
            <Text style={styles.descricao}>{this.props.descricao}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8f5e9",
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titulo: {
    fontFamily: 'Inter_700Bold',
    color: '#004d40',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontFamily: 'Inter_700Bold',
    color: '#004d40',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  cardTime: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
  },
  imagemEscudo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  nomeTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: '#004d40',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  cardJogador: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
  },
  jogadorInfo: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
  },
  imagemJogador: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15, 
  },
  infoJogador: {
    flex: 1, 
  },
  nomeJogador: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: '#004d40',
    fontWeight: 'bold',
  },
  time: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    color: '#004d40',
    paddingBottom: 5,
  },
  descricao: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#004d40',
  },
  imagemExtra: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default App;
