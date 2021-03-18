import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store';

const Teste = () => {
  return (
    <SafeAreaView>
      <Text>...</Text>
    </SafeAreaView>
  );
};

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Teste />
    </PersistGate>
  </Provider>
);
