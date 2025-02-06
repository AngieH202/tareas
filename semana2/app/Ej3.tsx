import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ejercicio3 = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo); // Limpieza del intervalo al desmontar
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hora actual: {hora}</Text>
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
  },
});

export default Ejercicio3;