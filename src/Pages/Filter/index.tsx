import React from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
import {View, Image} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, InputContainer, CardContainer } from './styles';
import ArrowBack from '../../components/ArrowBack';

interface RouteProps {
  name: string;
  job: string;
  rating: number;
}

const Filter: React.FC = () => {
  const route = useRoute();
  const { navigate } = useNavigation();

  const { name, job, rating } = route.params as RouteProps;

  return (
    <Container>
      <Header icon={true} />
      <ArrowBack onPress={() => navigate('Category')} />
      <InputContainer>
        <Input placeholder="Qual serviço deseja contratar" name="Pintores" />
      </InputContainer>
      <CardContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Card name={name} job={job} rating={rating} />
        <Card name={name} job={job} rating={rating} />
        <Card name={name} job={job} rating={rating} />
        <Card name={name} job={job} rating={rating} />
        <Card name={name} job={job} rating={rating} />
        <Card name={name} job={job} rating={rating} />
      </CardContainer>
    </Container>
  );
};

export default Filter;
