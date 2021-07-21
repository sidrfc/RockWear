import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
  
    function Pagamentos( { navigation } ) {
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
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Cartões de Crédito e Débito</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                    style = {{width:300, height:100, resizeMode:'contain'}}
                    source={{
                        uri: 'https://danielfarias.net.br/wp-content/uploads/2019/12/992edd80364a9b801ebe1743629c8a26.jpg'
                    }}
                />
                                        
              </View>
              
          </View> 
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Boleto Bancário</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                    style = {{width: 80, height:80, resizeMode:'contain'}}
                    source={{
                        uri: 'https://www.dsgadvogados.com.br/wp-content/uploads/2017/02/boleto-banc%C3%A1rio-aliexpress.jpg'
                    }}
                />
                      
              </View>
              
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Pix</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                    style = {{width:300, height:100, resizeMode:'contain'}}
                    source={{
                        uri: 'https://ibssistemas.com.br/wp-content/uploads/2020/11/3-1024x576.jpg'
                    }}
                />
                                        
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
  })
  export default Pagamentos;