import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {View, Text} from 'react-native';
import Card from '../../components/Card';
import FeedBackCard from '../../components/FeedBackCard';
import Header from '../../components/Header';
import ImagesCard from '../../components/ImagesCard';
import ArrowBack from '../../components/ArrowBack';

import {Container, Title, Line, TitleContainer} from './styles';

const Provider: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Header icon={true} />
      <ArrowBack onPress={() => navigate('Home')}/>
      <Container
        centerContent={true}
        contentContainerStyle={{alignItems: 'center'}}>
        <TitleContainer>
          <Title>Seu Perfil</Title>
          <Line />
        </TitleContainer>
        <Card larger={true} age={40} provider={true} />
        <TitleContainer>
          <Title>Trabalhos concluidos</Title>
          <Line />
        </TitleContainer>
        <ImagesCard />
        <TitleContainer>
          <Title>Meus Feedbacks</Title>
          <Line />
        </TitleContainer>
        <FeedBackCard />
        <FeedBackCard />
        <FeedBackCard />
      </Container>
    </View>
  );
};

export default Provider;
