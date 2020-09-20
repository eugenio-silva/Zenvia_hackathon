import React from 'react';
import {View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {Container, Title, LeftContainer} from './styles';

import logoImg from '../../assets/logo.png';
import houseImg from '../../assets/house.png';
import {RectButton} from 'react-native-gesture-handler';

interface Props {
  icon?: boolean;
}

const Header: React.FC<Props> = ({icon}: Props) => {
  const { navigate } = useNavigation();

  return (
    <Container
      style={{
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(0, 0, 0, 0.25)',
      }}>
      <LeftContainer>
        <Image source={logoImg} style={{width: 50, height: 50}} />
        <Title>Autobot</Title>
      </LeftContainer>

      {icon && (
        <RectButton onPress={() => navigate('Home')}>
          <Image
            source={houseImg}
            style={{width: 25, height: 25, marginRight: 20}}
          />
        </RectButton>
      )}
    </Container>
  );
};

export default Header;
