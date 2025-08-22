import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';
import { isValidDateDDMMYYYY, maskDateInput } from '../utils/formatters';

export default function EditarPerfilScreen({ route, navigation }) {
  const { usuario } = route.params;
  const [nome, setNome] = useState(usuario.nome);
  const [dataNascimento, setDataNascimento] = useState(usuario.dataNascimento);
  const [endereco, setEndereco] = useState(usuario.endereco);
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');

  const salvarEdicao = async () => {
    const usuariosJSON = await AsyncStorage.getItem('usuarios');
    let usuarios = JSON.parse(usuariosJSON) || [];
    const index = usuarios.findIndex(u => u.email === usuario.email);

    if (!isValidDateDDMMYYYY(dataNascimento)) {
        alert('Data de nascimento inválida. Use DD/MM/AAAA');
        return;
    }

    if (index !== -1) {
      if (novaSenha || confirmarNovaSenha) {
        if (senhaAtual !== usuario.senha) {
          alert('Senha atual incorreta.');
          return;
        }
        if (novaSenha !== confirmarNovaSenha) {
          alert('As novas senhas não coincidem.');
          return;
        }
        usuarios[index].senha = novaSenha;
      }

      usuarios[index].nome = nome;
      usuarios[index].dataNascimento = dataNascimento;
      usuarios[index].endereco = endereco;

      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Perfil atualizado com sucesso!');
      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Data de Nascimento (DD/MM/AAAA)" value={dataNascimento} onChangeText={(t) => setDataNascimento(maskDateInput(t))} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Alterar Senha (opcional)</Text>
      <TextInput style={styles.input} placeholder="Senha Atual" secureTextEntry value={senhaAtual} onChangeText={setSenhaAtual} />
      <TextInput style={styles.input} placeholder="Nova Senha" secureTextEntry value={novaSenha} onChangeText={setNovaSenha} />
      <TextInput style={styles.input} placeholder="Confirmar Nova Senha" secureTextEntry value={confirmarNovaSenha} onChangeText={setConfirmarNovaSenha} />

      <TouchableOpacity style={styles.button} onPress={salvarEdicao}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
