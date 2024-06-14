import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { 
    Container, 
    TextLogin, 
    TextInput, 
    Input, 
    LoginButton, 
    LoginButtonText, 
    ScrollContainer, 
    Viewsign, 
    Header, 
    BackButton, 
    BackButtonImage ,
    Image,
    FakeInput,
    Botaomf,
    Falsoinputtexto,
    Containerbotao,
    Textomf,
    Estadocivil,
    EspacoPicker,
    PickerTexto,
    PickerItem
} from "./styles";

export default function Cadastro() {
    const navigation = useNavigation();

    const [generoselect, setgenero] = useState('');
    const selectGenero = (generomf) => {
        setgenero(generomf);
    };
    const [selectedValue, setSelectedValue] = useState("solteiro");

    return (
        <Container>
            <ScrollContainer contentContainerStyle={{ alignItems: 'center' }}>
                <Header>
                    <BackButton onPress={() => navigation.navigate('Login')}>
                        <BackButtonImage source={require('./img/Voltar.png')} />
                    </BackButton>
                </Header>
                
                <Image source={require('./img/Logo_iesgo.png')} />
                <TextLogin>Create your Account</TextLogin>
                
                <Input>
                    <TextInput placeholder='Nome completo: ' />
                    <TextInput placeholder='CPF: 000.000.000-00 ' />
                    <TextInput placeholder='Cep: 73807775' />
                    <TextInput placeholder='UF: GO' />
                    <TextInput placeholder='Endereço: Rua das ruas' />
                    <TextInput placeholder='Numero da casa: 6969' />
                    <TextInput placeholder='Email: email@email.com' />
                    <TextInput placeholder='Password: ***************' secureTextEntry={true} />
                    <TextInput placeholder='Confirm password: ***************' secureTextEntry={true} />
                    <TextInput placeholder='Data de Nascimento: 00/00/0000' />
                    
                    <FakeInput>
                        <Falsoinputtexto>Sexo:</Falsoinputtexto>
                        <Containerbotao>
                            <Botaomf selected={generoselect === 'M'} onPress={() => selectGenero('M')}>
                                <Textomf selected={generoselect === 'M'}>M</Textomf>
                            </Botaomf>
                            <Botaomf selected={generoselect === 'F'} onPress={() => selectGenero('F')}>
                                <Textomf selected={generoselect === 'F'}>F</Textomf>
                            </Botaomf>
                        </Containerbotao>
                    </FakeInput>
                    
                    <TextInput placeholder='Profissão: ' />
                    <TextInput placeholder='Telefone: (61) 9 9999-9999' />
                    
                    <EspacoPicker>
                        <PickerTexto>Estado Civil: </PickerTexto>
                    <Estadocivil
       selectedValue={selectedValue}
       onValueChange={(itemValue) => setSelectedValue(itemValue)}
    
      >
        <PickerItem label="Solteiro" value="solteiro" />
        <PickerItem label="Casado" value="casado" />
        <PickerItem label="Separado" value="separado" />
        <PickerItem label="Divorciado" value="divorciado" />
        <PickerItem label="Viúvo" value="viuvo" />
      </Estadocivil>
      </EspacoPicker>
      
                </Input>

                <LoginButton>
                    <LoginButtonText>Sign up</LoginButtonText>
                </LoginButton>

                <Viewsign />
            </ScrollContainer>
        </Container>
    );
}