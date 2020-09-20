import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #000;
  font-family: 'Quicksand-Bold';
  top: 10px;
`;

export const ContainerImage = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ContainerDescriptionImage = styled.View`
  position: relative;
`;

export const TextImage = styled.Text`
  position: absolute;
  top: 60px;
  left: 10px;
  font-size: 23px;
  font-family: 'Quicksand-Bold';
`;

