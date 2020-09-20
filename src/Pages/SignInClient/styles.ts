import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ContainerChild = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #000;
  font-family: 'Quicksand-Bold';
  text-align: center;
`;

export const ContainerForm = styled.View`
  margin-top: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${width}px;
  padding-left: 30px;
`;

export const ContainerButton = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;

export const SubTitle = styled.Text`
  font-size: 19px;
  color: #000;
  font-family: 'Quicksand-Bold';
  width: 250px;
`;

export const Line = styled.View`
  width: ${width * 0.6}px;
  height: 2.5px;
  background-color: #000000;
  border-radius: 2px;
  margin-top: 4px;
`;
