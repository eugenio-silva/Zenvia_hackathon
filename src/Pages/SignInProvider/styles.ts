import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #000;
  font-family: 'Quicksand-Bold';
  text-align: center;
`;

export const SmallText = styled.Text`
  font-size: 15px;
  color: #000;
  font-family: 'Quicksand-Bold';
  text-align: right;
  padding-right: 5px;
`;

export const ContainerForm = styled.View``;

export const SubTitle = styled.Text`
  font-size: 25px;
  color: #000;
  font-family: 'Quicksand-Bold';
  width: 250px;
`;

export const ContainerLogo = styled.View`
  top: 25px;
`;

export const ButtonContainerLogin = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${width}px;
  top: 0;
`;
