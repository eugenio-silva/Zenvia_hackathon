import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  ContainerForm,
  ContainerLogo,
  ButtonContainerLogin,
  Center,
  SmallText,
} from './styles';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ArrowBack from '../../components/ArrowBack';
import { useNavigation } from '@react-navigation/native';

const SignInProvider: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  function handleToProfile() {
    navigate('Profile', {owner: true});
  }

  function handleToRegister() {
    navigate('Register');
  }

  return (
    <Container>
      <Header />
      <ArrowBack onPress={() => goBack()} />
      <Center>
        <Title>Autobot</Title>

        <ContainerLogo>
          <Image source={logo} style={{ width: 200, height: 200 }} />
        </ContainerLogo>

        <ContainerForm>
          <Input
            icon={true}
            email={true}
            label="Login:"
            name="email"
            placeholder="Seu e-mail"
          />
          <Input
            icon={true}
            password={true}
            label="Senha:"
            name="password"
            placeholder="Senha"
          />
          <SmallText>Esqueci minha senha</SmallText>
        </ContainerForm>

        <ButtonContainerLogin>
          <Button style={{ top: 30, marginLeft: 15 }} name="Entrar" onPress={handleToProfile} />
          <Button style={{ top: 30, marginLeft: 15 }} name="Cadastra-se" onPress={handleToRegister} />
        </ButtonContainerLogin>
      </Center>
    </Container>
  );
};
export default SignInProvider;
