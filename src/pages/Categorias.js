import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

  function Categorias( { navigation } ) {
      return (
        <ScrollView>
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
                                style = {{width: 150, height:150, resizeMode:'contain'}}
                                source={{
                                uri: 'https://www.deliriyou.com.br/app/assets/images/dinamica/produto/102/cor_0/thumb/x02044-blusa-customizada-rolling-stones-080120-727f68.jpg.pagespeed.ic.63gHRlqYZz.jpg'
                                }}
                            />
                            <Text>Blusas e Camisetas Estilizadas</Text>
                            <Button 
                                 title="Ver todos"
                                 color="#006165"
                                 onPress= {() => {navigation.navigate('')}}
                            />
                            
                    </View>
                                  
                </View>  

                <View style={style.areaProduto}>
                    <View style={style.produto}>                        
                        <Image
                                style = {{width: 150, height:150, resizeMode:'contain'}}
                                source={{
                                uri: 'https://www.deliriyou.com.br/app/assets/images/dinamica/produto/141/cor_0/thumb/x03024-vestido-ramones-star-040920-9e3121.jpg.pagespeed.ic.sbR1xfXJm1.jpg'
                                }}
                            />
                            <Text>Vestidos</Text>
                            <Button 
                                 title="Ver todos"
                                 color="#006165"
                                 onPress= {() => {navigation.navigate('')}}
                            />
                    </View>
                    <View style={style.produto}>
                        <Image
                                style = {{width: 150, height:150, resizeMode:'contain'}}
                                source={{
                                uri: 'http://2.bp.blogspot.com/-kDwp0gWCFoI/USVkyg7CzoI/AAAAAAAAAw8/dfHyEg0nDsw/s1600/acess%C3%B3rios+rock.jpg'
                                }}
                            />
                            <Text>Acessórios</Text>
                            <Button 
                                 title="Ver todos"
                                 color="#006165"
                                 onPress= {() => {navigation.navigate('')}}
                            />
                            
                    </View>                    
                </View>  
                         
        </View>
        </ScrollView>  
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

export default Categorias;