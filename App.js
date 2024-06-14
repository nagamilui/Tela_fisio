import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './login';
import Cadastro from './cadastro';
import Home from './Home'
import { View, Button } from 'react-native';
import PreencherProntuarioTela from './PreencherProntuarioTela';
import RelatorioEvolucaoTela from './RelatorioEvolucaoTela';
import { DrawerItem, CloseButton,FecharTexto } from "./styles"; 
import * as Font from 'expo-font';
import { useFonts } from "expo-font";






const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

  
  function AtendimentosTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function RelatoriosTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.goBack()}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function SuporteTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function FichaEstagioTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function InformacoesTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function CustomDrawerContent({ navigation }) {
    return (
      <View style={{ flex: 1, paddingTop: 60 }}>
        <CloseButton onPress={() => navigation.closeDrawer()}><FecharTexto>X</FecharTexto></CloseButton>
        <DrawerItem title="Home" onPress={() => navigation.navigate('HomeScreen')} />
        <DrawerItem title="Meus Atendimentos" onPress={() => navigation.navigate('Meus Atendimentos')} />
        <DrawerItem title="Relatorio de Paciente" onPress={() => navigation.navigate('Relatorio de Paciente')} />
        <DrawerItem title="Suporte" onPress={() => navigation.navigate('Suporte')} />
        <DrawerItem title="Relatorio de Evolucao Medica" onPress={() => navigation.navigate('Relatorio de Evolucao Medica')} />
        <DrawerItem title="Enviar Ficha de Estagio" onPress={() => navigation.navigate('Enviar Ficha de Estagio')} />
        <DrawerItem title="Preencher Prontuario" onPress={() => navigation.navigate('Preencher Prontuario')} />
      </View>
    );
  }
  
  function DrawerNavigator() {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Meus Atendimentos" component={AtendimentosTela} options={{ headerShown: false }} />
        <Drawer.Screen name="Relatorio de Paciente" component={RelatoriosTela} options={{ headerShown: false }} />
        <Drawer.Screen name="Suporte" component={SuporteTela } options={{ headerShown: false }}  />
        <Drawer.Screen name="Informações Médicas" component={InformacoesTela} options={{ headerShown: false }}   />
        <Drawer.Screen name="Relatorio de Evolucao Medica" component={RelatorioEvolucaoTela} options={{ headerShown: false }}  />
        <Drawer.Screen name="Enviar Ficha de Estagio" component={FichaEstagioTela} options={{ headerShown: false }} />
        <Drawer.Screen name="Preencher Prontuario" component={PreencherProntuarioTela} options={{ headerShown: false }}  />
      </Drawer.Navigator>
    );
  }


export default function App() {
    
    const [fontsLoaded] = useFonts({
      'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
      'Lato-Regular': require('./assets/fonts/Inter/Lato-Regular.ttf'),
      'Inter-Regular': require('./assets/fonts/Inter/Inter-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null; // Aguarde até que as fontes sejam carregadas
      }


    return (


        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Cadastro" 
                    component={Cadastro} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen
                name="Home"
                component={DrawerNavigator}
                options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Prontuario" 
                    component={PreencherProntuarioTela} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="InfoMedico" 
                    component={InformacoesTela} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Relatorio" 
                    component={RelatorioEvolucaoTela} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Suporte" 
                    component={SuporteTela} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Estagio" 
                    component={FichaEstagioTela} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Paciente" 
                    component={RelatoriosTela} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Atendimentos" 
                    component={AtendimentosTela} 
                    options={{ headerShown: false }} 
                />

            </Stack.Navigator>
            
    
       
        
        </NavigationContainer>

        
    );
}
