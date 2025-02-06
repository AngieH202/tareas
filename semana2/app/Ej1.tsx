import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const UserForm = () => {
  // Estado para manejar el nombre y la edad del usuario
  const [usuario, setUsuario] = useState({ nombre: '', edad: '' });
  const [mensaje, setMensaje] = useState('');

  // Manejo de cambios en los inputs
  const handleChange = (key: string, value: string) => {
    if (key === 'edad' && !/^[0-9]*$/.test(value)) return; // Validación numérica
    setUsuario({ ...usuario, [key]: value });
  };

  // useEffect para actualizar el mensaje cuando cambia el estado
  React.useEffect(() => {
    if (usuario.nombre && usuario.edad) {
      setMensaje(`Hola, ${usuario.nombre}. Tienes ${usuario.edad} años.`);
    } else {
      setMensaje('');
    }
  }, [usuario]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={usuario.nombre}
        onChangeText={(text) => handleChange('nombre', text)}
      />
      <Text style={styles.label}>Edad:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        keyboardType="numeric"
        value={usuario.edad}
        onChangeText={(text) => handleChange('edad', text)}
      />
      {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});
export default UserForm;
