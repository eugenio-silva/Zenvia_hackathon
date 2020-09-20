import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Container, Title, CointanerInput, ButtonContainer } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  const { navigate } = useNavigation();

  function handleToHome() {
    navigate('Home');
  }

  return(
    <Container>
      <Header />

      <Title>Cadastro</Title>

    <CointanerInput>
      <Input name="provider" placeholder="Nome" />
      <Input name="email" placeholder="E-mail" />
      <Input name="password" placeholder="Senha" />
      <Input name="number" placeholder="Seu Número" />
      <Input name="city" placeholder="Sua Cidade" />
      <Input name="service" placeholder="Qual trabalho você quer prestar?" />

      <ButtonContainer>
        <Button name="Cadastrar" onPress={handleToHome} />
      </ButtonContainer>
    </CointanerInput>

    </Container>
  );
}

export default Register;