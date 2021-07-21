import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Categorias from './src/pages/Categorias';
import Pagamentos from './src/pages/Pagamentos';
import { StatusBar } from 'react-native';


const Tab = createBottomTabNavigator();


const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  },
  Categorias: {
    name: 'ios-list'
  },
  Pagamentos: {
    name: 'ios-card-outline'
  }
};

function App() {
  return(
    /* Abre container da navegação */
    <NavigationContainer>
      {/* Insere a navegação Tab dentro container */}
      <Tab.Navigator 
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })  }
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categorias" component={Categorias} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Pagamentos" component={Pagamentos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

  



export default App;