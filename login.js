import React from "react";
import { Container, TextLogin, TextInput, Input, Image, LoginButton, LoginButtonText, Textsignup, Signup, Viewsign } from "./styles";   
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  
  return (
    <Container>
      <Image source={require('./img/Logo_iesgo.png')} />
      <TextLogin>Login To Your Account</TextLogin>
      
      <Input>
        <TextInput placeholder='Email: email@email.com' />
        <TextInput placeholder='Password: ***************' secureTextEntry={true} />
      </Input>

      <LoginButton onPress={() => navigation.navigate('Home')}>
        <LoginButtonText>Sign In</LoginButtonText>
      </LoginButton>

      <Viewsign>
        <Textsignup>Don't have an account? </Textsignup> 
        <Signup onPress={() => navigation.navigate('Cadastro')}>
          <Textsignup style={{ color: '#00005D', fontFamily:'Inter-Bold', fontSize: 14 }}>Sign up</Textsignup>
        </Signup>
      </Viewsign>
    </Container>
  );
}