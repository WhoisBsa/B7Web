import React from 'react';
import {Image} from 'react-native';

function Logo() {
  return (
    <Image
      style={{height: 45, width: 150}}
      source={{uri: 'https://www.google.com.br/google.jpg'}}
    />
  );
}

export default Logo;
