import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Ejercicio2 = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => { //useEffect para mostrar un mensaje en la consola cada vez que el contador cambie
    console.log(`El contador ha cambiado: ${contador}`);
    if (contador % 5 === 0 && contador !== 0) {
      alert('Ha alcanzado un múltiplo de 5');
    }
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Ejercicio2;