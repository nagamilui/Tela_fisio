import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export default function MeusAgendamentos() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAppointment(null);
  };

  const renderAppointment = ({ item }) => (
    <AppointmentCard>
      <CardContent>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Paciente</Text>
        <Text>{item.therapist}</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Data Da Consulta</Text>
        <Text>{item.date}</Text>
      </CardContent>
      <CardActions locked={item.locked}>
        <CardButton onPress={() => !item.locked && openModal(item)}>
          <CardButtonIcon
            source={
              item.locked
                ? require('./img/logo_cadeado.png')  // Ícone para "locked"
                : require('./img/logo_acesso.png')  // Ícone para "edit"
            }
          />
        </CardButton>
      </CardActions>
    </AppointmentCard>
  );

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonImage source={require('./img/Voltar.png')} />
        </BackButton>
        <HeaderText>Meus Agendamentos</HeaderText>
      </Header>
      <FlatList
        data={[
          { id: '1', therapist: 'Erick Valverde', date: '14/06/2024', locked: true },
          { id: '2', therapist: 'Kevin Lima', date: '10/06/2024', locked: false },
          { id: '3', therapist: 'Cristiano Marques', date: '15/06/2024', locked: false },
        
        ]}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointment}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      {selectedAppointment && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <ModalContainer>
            <ModalContent>
              {selectedAppointment.locked ? (
                <ModalButton>
                  <ModalButtonText>Cancelar Agendamento</ModalButtonText>
                </ModalButton>
              ) : (
                <>
                  <ModalButton onPress={() => navigation.navigate('Detalhespaciente')}>
                    <ModalButtonText>Detalhes do paciente</ModalButtonText>
                  </ModalButton>
                  <ModalButton onPress={() => navigation.navigate('Paciente')}>
                    <ModalButtonText>Abrir relatorio</ModalButtonText>
                  </ModalButton>

                   <ModalButton onPress={() => navigation.navigate('Relatorio')}>
                    <ModalButtonText>Ficha de Evolução</ModalButtonText>
                  </ModalButton>
                  <ModalButton onPress={() => navigation.navigate('Prontuario')}>
                    <ModalButtonText>Primeira consulta/Prontuario</ModalButtonText>
                  </ModalButton>
                </>
              )}
              <CloseButton onPress={closeModal}>
                <CloseButtonText>Fechar</CloseButtonText>
              </CloseButton>
            </ModalContent>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Header = styled.View`
  background-color: #00005D;
  padding: 20px;
  align-items: center;
  flex-direction: row; /* Para alinhar o botão de voltar à esquerda */
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: auto; /* Move o texto para a direita */
  margin-right: auto; /* Move o texto para a esquerda */
  text-align: center; /* Centraliza o texto horizontalmente */
`;

const BackButton = styled(TouchableOpacity)`
  padding: 10px;
`;

const BackButtonImage = styled(Image)`
  width: 24px;
  height: 24px;
`;

const AppointmentCard = styled.View`
  flex-direction: row;
  background-color: #f9f9f9;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  elevation: 2;
`;

const CardContent = styled.View`
  flex: 1;
  padding: 20px;
`;

const CardActions = styled.View`
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.locked ? '#FF0000' : '#00005D'};
`;

const CardButton = styled(TouchableOpacity)`
  padding: 10px;
  margin: 5px;
`;

const CardButtonIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  elevation: 10;
`;

const ModalButton = styled(TouchableOpacity)`
  background-color: #001f7f;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
`;

const ModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const CloseButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  background-color: grey;
`;

const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;