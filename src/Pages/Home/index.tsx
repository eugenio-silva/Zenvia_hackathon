import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

import Input from '../../components/Input';

import {
  Container,
  Description,
  TextDescription,
  TextSubDescription /* 
  ButtonContainer,
  ButtonHire, */,
  ButtonContainerService,
  ButtonService,
  ButtonContainer,
  ButtonHire,
  ButtonContainerHire,
  ContainerLogo,
  ContainerDescription,
  ButtonContainerChild,
} from './styles';

import logoImg from '../../assets/logo.png';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  function handleToLoginClient() {
    navigate('SignInClient');
  }

  function handletoLoginProvider() {
    navigate('SignInProvider');
  }

  return (
    <Container>
      <ContainerLogo>
        <Description>AutoBot</Description>
        <Image
          source={logoImg}
          style={{width: 230, height: 230, marginTop: 20}}
        />
        <TextDescription>
          O Aplicativo que vai falicitar sua vida
        </TextDescription>
      </ContainerLogo>

      <ContainerDescription>
        <TextSubDescription>O que deseja fazer?</TextSubDescription>
      </ContainerDescription>

      <ButtonContainer>
        <ButtonContainerHire onPress={() => handleToLoginClient()}>
          <ButtonHire>Contratar Serviço</ButtonHire>
        </ButtonContainerHire>

        <ButtonContainerService>
          <ButtonService onPress={() => handletoLoginProvider()}>
            Oferecer Serviço
          </ButtonService>
        </ButtonContainerService>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
