import React from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  SubTitle,
  ContainerForm,
  ContainerChild,
  ContainerButton,
  Line,
} from './styles';
import { Dimensions, Image } from 'react-native';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ArrowBack from '../../components/ArrowBack';
import BlackLogo from '../../components/BlackLogo';

const { width, height } = Dimensions.get('window');

const SignInClient: React.FC = () => {
  const { navigate } = useNavigation();

  function handleToCategory() {
    navigate('Category');
  }

  return (
    <Container>
      <Header />
      <ArrowBack onPress={() => navigate('Home')} />
      <ContainerChild>
        <Title>Login Autobot</Title>

        <ContainerForm>
          <SubTitle>Apenas me informe:</SubTitle>
          <Line />
          <Input
            widthProp={width * 0.6}
            label="Nome completo:"
            name="name"
            placeholder="Nome Completo"
          />
          <Input
            widthProp={width * 0.6}
            label="Seu número:"
            name="number"
            placeholder="Seu número"
            keyboardType="number-pad"
          />
          <Input
            widthProp={width * 0.6}
            label="Sua cidade:"
            name="city"
            placeholder="Cidade"
          />

          <ContainerButton>
            <Button name="Entrar" onPress={handleToCategory} />
          </ContainerButton>
        </ContainerForm>

        <BlackLogo />
      </ContainerChild>
    </Container>
  );
};
export default SignInClient;
