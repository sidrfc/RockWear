import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

  function Home( { navigation } ) {
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
                                uri: 'https://www.deliriyou.com.br/app/assets/images/dinamica/produto/520/cor_0/thumb/x02198-blusa-guns-n-roses-100420-c48e16.jpg.pagespeed.ic.ORtUdW1WAA.jpg'
                                }}
                            />
                            <Text>BLUSA GUNS N' ROSES</Text>
                            <Text>R$ 48,90 à vista ou</Text>
                            <Text>em até 6x sem juros</Text>
                            <Button style={style.botoes}
                                 title="Comprar"
                                 color="#3a8a2f"
                                 onPress= {() => {navigation.navigate('')}}
                            />
                    </View>
                    <View style={style.produto}>
                        <Image
                                style = {{width: 150, height:150, resizeMode:'contain'}}
                                source={{
                                uri: 'https://www.deliriyou.com.br/app/assets/images/dinamica/produto/734/cor_0/thumb/x02289-blusa-iron-maiden-080221-91170e.jpg.pagespeed.ic.N4pf6PIFQA.jpg'
                                }}
                            />
                            <Text>BLUSA IRON MAIDEN</Text>
                            <Text>R$ 58,90 à vista ou</Text>
                            <Text>em até 6x sem juros</Text>
                            <Button 
                                 title="Comprar"
                                 color="#3a8a2f"
                                 onPress= {() => {navigation.navigate('')}}
                            />
                    </View>                    
                </View>  
                              
                <View style={style.areaProduto}>
                    <View style={style.produto}>                        
                        <Image
                                style = {{width: 150, height:150, resizeMode:'contain'}}
                                source={{
                                uri: 'https://www.deliriyou.com.br/app/assets/images/dinamica/produto/86/cor_0/thumb/x02029-blusa-metallica-300321-48a37a.jpg.pagespeed.ic.dy68_FYNqc.jpg'
                                }}
                            />
                            <Text>BLUSA METALLICA</Text>
                            <Text>R$ 47,90 à vista ou</Text>
                            <Text>em até 6x sem juros</Text>
                            <Button 
                                 title="Comprar"
                                 color="#3a8a2f"
                                 onPress= {() => {navigation.navigate('')}}
                            />
                    </View>
                    <View style={style.produto}>
                        <Image
                                style = {{width: 150, height:150, resizeMode:'contain'}}
                                source={{
                                uri: 'https://www.deliriyou.com.br/app/assets/images/dinamica/produto/221/cor_0/thumb/x02100-blusa-pink-floyd-170320-a9328a.jpg.pagespeed.ic.R2sidE1cCe.jpg'
                                }}
                            />
                            <Text>BLUSA PINK FLOYD</Text>
                            <Text>R$ 44,90 à vista ou</Text>
                            <Text>em até 6x sem juros</Text>
                            <Button 
                                 title="Comprar"
                                 color="#3a8a2f"
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

export default Home;