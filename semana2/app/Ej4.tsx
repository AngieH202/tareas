import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ejercicio4 = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timeout); // Limpieza del timeout al desmontar
  }, []);

  return (
    <View style={styles.container}>
      {cargando ? (
        <Text style={styles.texto}>Cargando espera...</Text>
      ) : (
        <Text style={styles.texto}>Bienvenido a la aplicacion</Text>
      )}
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

export default Ejercicio4;