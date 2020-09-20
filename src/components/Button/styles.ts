import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 140px;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;

  background: #3D4165;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Quicksand-Bold';
  font-size: 17px;
`;