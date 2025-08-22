import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/global';
import { formatDateForDisplay } from '../utils/formatters';

export default function PerfilScreen({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const emailLogado = await AsyncStorage.getItem('usuarioLogado');
        if (!emailLogado) {
          alert("Nenhum usuário logado.");
          navigation.navigate('Login');
          return;
        }
        const usuariosJSON = await AsyncStorage.getItem('usuarios');
        const usuarios = JSON.parse(usuariosJSON) || [];
        const usuarioLogado = usuarios.find(u => u.email === emailLogado);

        if (!usuarioLogado) {
          alert("Usuário não encontrado.");
          navigation.navigate('Login');
          return;
        }

        setUsuario(usuarioLogado);
      } catch (e) {
        alert("Erro ao carregar o perfil.");
      } finally {
        setCarregando(false);
      }
    };

    const unsubscribe = navigation.addListener('focus', carregarUsuario);
    return unsubscribe;
  }, [navigation]);

  const deslogar = async () => {
    await AsyncStorage.removeItem('usuarioLogado');
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando perfil...</Text>
      </View>
    );
  }

  if (!usuario) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text>Nome: {usuario.nome}</Text>
      <Text>Email: {usuario.email}</Text>
      <Text>Data de Nascimento: {formatDateForDisplay(usuario.dataNascimento)}</Text>
      <Text>Endereço: {usuario.endereco}</Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#1e90ff' }]} onPress={() => navigation.replace('Cardapio')}>
        <Text style={styles.buttonText}>Voltar ao Cardápio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditarPerfil', { usuario })}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.button} onPress={deslogar}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
