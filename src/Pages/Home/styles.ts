import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.View`
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 36px;
  color: rgba(0, 0, 0, 0.64);
  font-family: 'Quicksand-Bold';
`;

export const ContainerDescription = styled.View`
  margin-top: 20px;
`;

export const TextDescription = styled.Text`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.64);
  font-family: 'Quicksand-Regular';
`;

export const TextSubDescription = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.64);
  font-family: 'Quicksand-Bold';
  top: 0;
`;

export const ButtonService = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const ButtonContainerService = styled(RectButton)`
  background: #7e7ebc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: ${height * 0.18}px;
  width: 131px;
  justify-content: center;
`;

export const ButtonContainerChild = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

export const ButtonContainer = styled.View`
  margin-top: 24px;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  height: ${height * 0.19}px;
  width: ${width * 0.8}px;
`;

export const ButtonHire = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const ButtonContainerHire = styled(RectButton)`
  background: #3d4165;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: ${height * 0.18}px;
  width: 131px;
  justify-content: center;
`;
