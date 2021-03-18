/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [status, setStatus] = useState('');
  const [showCupom, setShowCupom] = useState(false);

  const handleVerifyLogin = async () => {
    setStatus('');
    setShowCupom(false);

    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await req.json();

    if (json.status === 'ok') {
      setStatus('Acesso LIBERADO');
      setShowCupom(true);
    } else {
      setStatus('Acesso NEGADO');
      setShowCupom(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Desconto UltraBlaster</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail..."
        keyboardType="email-address"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry={true}
      />

      <Button title="Verificar" onPress={handleVerifyLogin} />

      <Text style={styles.status}>{status}</Text>

      {showCupom && (
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Código de Cupom:</Text>
          <Text style={styles.cupomCode}>JAHRK123</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 45,
    fontSize: 18,
    color: 'white',
    backgroundColor: '#555',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  status: {
    margin: 50,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  cupomArea: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 30,
  },
  cupomTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  cupomCode: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    padding: 5,
  },
});

export default App;
