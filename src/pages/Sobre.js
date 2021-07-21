  import React from 'react';
  import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  
    function Sobre( { navigation } ) {
        return (
          <View style={{ flex: 1}}>
              <View style={style.areaTitulo}>
                  <Text style={style.titulo}>Rock Wear</Text>
                  <View style={style.searchSection}>
                      <Icon style={style.searchIcon} name="ios-search" size={20} color="#000"/>
                      <TextInput
                          style={style.input}
                          placeholder="Pesquisar produtos..."
                          underlineColorAndroid="transparent"
                      />
                  </View>
             </View>
                  <View style={style.areaProduto}>
                      <View style={style.produto}>                        
                          <Image
                                  style = {{width:350, height:250, resizeMode:'contain'}}
                                  source={{
                                  uri: 'https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/lhh3z3byh0ho.jpg'
                                  }}
                              />
                              <Text style={style.descricao}>Somos uma loja online que oferece o melhor para os nossos clientes, onde podemos atender todas as expectativas sobre a moda feminina sempre de olho nas tendências e lançamentos.</Text>
                              <Text  style={style.descricao}>Nossa loja oferece o que há de mais moderno e atual em todas as categorias de produtos.</Text>
                              <Text  style={style.descricao}>Estamos localizados na Rua Dom Pedro I, S/N, Centro, João Pessoa - PB. </Text>
                              
                      </View>
                                       
                  </View>  
                           
          </View>
        );
    }
  
  
  const style = StyleSheet.create({
      areaTitulo: {
          backgroundColor: '#000300' ,
          flexDirection: 'row',      
      },
      titulo: {
          backgroundColor: '#000300',
          color: 'white',
          fontSize: 20,
          margin: 20 
      },
      pesquisa: {
          backgroundColor: 'white',
          flex: 1,
          height: 40,
          margin: 10
      },
      areaProduto: {
          flexDirection: 'row',
           margin: 20,
      },
      produto: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      searchSection: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: 40,
          margin: 10
      },
      searchIcon: {
          padding: 10,
      },
      input: {
          flex: 1,
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingLeft: 0,
          backgroundColor: '#fff',
          color: '#424242',
      },
      descricao: {
        paddingTop: 2,
        justifyContent: 'center',    
           
    }
  })

  export default Sobre;

