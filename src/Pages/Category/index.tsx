import React from 'react';
import { 
Container, 
Title, 
ContainerImage, 
ContainerDescriptionImage,
TextImage
} from './styles';
import { Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import ArrowBack from '../../components/ArrowBack';

import Input from '../../components/Input';
import Header from '../../components/Header';

import plumber from '../../assets/plumber.png';
import baba from '../../assets/baba.png';
import delivery from '../../assets/delivery.png';
import paint from '../../assets/paint.png';

const { width, height } = Dimensions.get('window');

const Category: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigate(name: string, job: string, rating: number) {
    navigate('Filter', { name, job, rating });
  }

  return (
    <>
      <ArrowBack onPress={() => navigate('Home')} />
      <Container>
      <Header />
      <Input name="filter" placeholder="Qual serviço deseja contratar?" />

      <ContainerImage showsVerticalScrollIndicator={false} style={{bottom: 20}}>
        <Title style={{bottom: 20}}>Categorias</Title>
        <RectButton
          onPress={() => handleNavigate('José armando', 'Encanador', 4)}>
          <ContainerDescriptionImage>

            <Image
              source={plumber}
              style={{
                width: width * 0.9,
                height: height * 0.15,
                marginTop: 25,
                borderRadius: 10,
              }}
            />
              <TextImage>Pintura</TextImage>
          </ContainerDescriptionImage>
        </RectButton>

        <RectButton onPress={() => handleNavigate('Paulo armando', 'Baba', 5)}>
        <ContainerDescriptionImage>
            <Image
              source={baba}
              style={{
                width: width * 0.9,
                height: height * 0.15,
                marginTop: 5,
                borderRadius: 10,
              }}
            />
            <TextImage>Babá</TextImage>
          </ContainerDescriptionImage>
        </RectButton>

        <RectButton
          onPress={() => handleNavigate('José armando', 'Entregador', 3.5)}>
          <ContainerDescriptionImage>
            <Image
              source={delivery}
              style={{
                width: width * 0.9,
                height: height * 0.15,
                marginTop: 5,
                borderRadius: 10,
              }}
            />
            <TextImage>Delivery</TextImage>
          </ContainerDescriptionImage>
        </RectButton>

        <RectButton
          onPress={() => handleNavigate('Paulo armando', 'Pintor', 4.2)}>
          <ContainerDescriptionImage>
            <Image
              source={paint}
              style={{
                width: width * 0.9,
                height: height * 0.15,
                marginTop: 5,
                borderRadius: 10,
              }}
            />
            <TextImage>Encanador</TextImage>
          </ContainerDescriptionImage>
        </RectButton>
      </ContainerImage>
    </Container>
    </>
  );
};

export default Category;
