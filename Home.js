import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Viewazul, Viewbranco,Viewtopo,Viewbotao, Botaoopcao ,Opcaoimage,Textohome,Logoiesgo ,Textofisio,Botaoservico, Textobotao,Imagembotao,Textohomebranco,Imagemperfil} from './styles';

export default function Home() {
    const navigation = useNavigation();
    return(
        <Viewazul>
            <Viewtopo>
            <Botaoopcao onPress={( )=> navigation.openDrawer()}>
            <Opcaoimage source={require('./img/Opcao2.png')}/>
            </Botaoopcao>
            <Textohome>Olá, Paciente</Textohome>
            <Imagemperfil source={require('./img/Foto.png')} ></Imagemperfil>
            <Logoiesgo source={require('./img/Logo_iesgo.png')} />
            <Textofisio>Fisioterapia</Textofisio>
        

            </Viewtopo>
        <Viewbranco>
        <Textohomebranco>O que você precisa hoje? </Textohomebranco>
        <Viewbotao>
        <Botaoservico onPress={() => navigation.navigate('Atendimentos')}>
        <Imagembotao source ={require('./img/Calendar2.png')}/>
        <Textobotao>Meus Atendimento</Textobotao>
        </Botaoservico>

        <Botaoservico onPress={() => navigation.navigate('Paciente')}>
        <Imagembotao source={require('./img/Relatoriopaciente.png')} />
        <Textobotao>Relatorio de Paciente</Textobotao>
        </Botaoservico>

        <Botaoservico onPress={() => navigation.navigate('Suporte')} >
        <Imagembotao source={require('./img/Suporte2.png')} />
        <Textobotao>Suporte</Textobotao>
        </Botaoservico>

        <Botaoservico onPress={() => navigation.navigate('Relatorio')} >
        <Imagembotao  source={require('./img/Relatorioevolucao.png')} />
        <Textobotao>Relatorio de Evolução</Textobotao>
        </Botaoservico>

        <Botaoservico onPress={() => navigation.navigate('Estagio')}>
        <Imagembotao source={require('./img/Estagio.png')} />
        <Textobotao>Enviar Ficha de Estagio</Textobotao>
        </Botaoservico>

        <Botaoservico onPress={() => navigation.navigate('Prontuario')}>
        <Imagembotao source={require('./img/Prontuario.png')} />
        <Textobotao>Preencher Prontuario</Textobotao>
        </Botaoservico>

        </Viewbotao>



        </Viewbranco>
        </Viewazul>





    );



}

