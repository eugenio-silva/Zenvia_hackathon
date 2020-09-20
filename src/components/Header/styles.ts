import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 69px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: ${width}px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Quicksand-Bold';
  font-size: 20px;
  line-height: 25px;
  padding-left: 2px;
`;
