import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/global';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="Senha"
          style={[styles.input, { flex: 1 }]}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPassword}>{showPassword ? 'Esconder' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          try {
            const usuariosJSON = await AsyncStorage.getItem('usuarios');
            const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
            const usuario = usuarios.find(u => u.email === email && u.senha === senha);

            if (usuario) {
              await AsyncStorage.setItem('usuarioLogado', email);
              navigation.replace('Cardapio');
            } else {
              Alert.alert('Erro', 'Email ou senha inválidos');
            }
          } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login');
          }
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Cadastro')}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
