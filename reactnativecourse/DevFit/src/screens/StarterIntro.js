import React from 'react';
import styled from 'styled-components/native';

import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
`;

const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
`;

const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;

const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

const BeginConfigArea = styled.View`
  margin-bottom: 50px;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: #fff;
`;

const Page = (props) => {
  const start = () => {
    props.navigation.navigate('StarterName');
  };

  return (
    <Container>
      <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          bgcolor="#0072c0"
          underlayColor="#0b7ac6"
          onPress={start}>
          <ButtonText>Iniciar Configuaração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

Page.navigationOptions = {
  headerShown: false,
};

export default Page;
