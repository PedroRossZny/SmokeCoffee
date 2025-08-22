import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/global';
import { isValidDateDDMMYYYY, maskDateInput } from '../utils/formatters';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');

  const criarConta = async () => {
    if (!nome || !email || !dataNascimento || !endereco || !senha) {
    Alert.alert('Erro', 'Preencha todos os campos');
    return;
    }
    const emailOk = /\S+@\S+\.\S+/.test(email);
    if (!emailOk) {
    Alert.alert('Erro', 'Informe um e-mail válido');
    return;
    }
    if (!isValidDateDDMMYYYY(dataNascimento)) {
    Alert.alert('Erro', 'Data de nascimento inválida. Use DD/MM/AAAA');
    return;
    }
    if (senha.length < 4) {
    Alert.alert('Erro', 'A senha deve ter pelo menos 4 caracteres');
    return;
    }

    try {
      const usuariosJSON = await AsyncStorage.getItem('usuarios');
      const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

      const jaExiste = usuarios.find(u => u.email === email);
      if (jaExiste) {
        Alert.alert('Erro', 'Este e-mail já está cadastrado');
        return;
      }

      const novoUsuario = { nome, email, dataNascimento, endereco, senha };
      usuarios.push(novoUsuario);
      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));

      Alert.alert('Sucesso', 'Conta criada com sucesso');
      navigation.replace('Login');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível criar a conta');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="E-mail" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Data de Nascimento (DD/MM/AAAA)" style={styles.input} value={dataNascimento} onChangeText={(t) => setDataNascimento(maskDateInput(t))} />
      <TextInput placeholder="Endereço" style={styles.input} value={endereco} onChangeText={setEndereco} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />

      <TouchableOpacity style={styles.button} onPress={criarConta}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      {/* TODO: No seu código original havia um erro aqui:
          <TouchableOpacity onPress={criarConta}> ... "Cancelar" ... navigation.replace('Login');
         Troquei por um botão "Cancelar" correto, apenas para não quebrar o app. */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#777' }]}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
