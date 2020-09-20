import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Center = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Container = styled.ScrollView`
  margin-bottom: 10px;
`;

export const TitleContainer = styled.View`
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 25px;
  font-family: 'Quicksand-Bold';
  line-height: 30px;
`;

export const Line = styled.View`
  width: ${width * 0.8}px;
  height: 3.5px;
  background-color: #000000;
  border-radius: 10px;
`;
