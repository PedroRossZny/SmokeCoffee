// src/screens/PagamentoScreen.js
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/global';

export default function PagamentoScreen({ navigation }) {
  // 'cartao' | 'pix' | null
  const [formaPagamento, setFormaPagamento] = useState(null);
  const [numeroCartao, setNumeroCartao] = useState('');
  const [cvv, setCvv] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');

  const realizarPagamento = () => {
    if (!formaPagamento) {
      Alert.alert('Atenção', 'Escolha Cartão ou Pix');
      return;
    }

    if (formaPagamento === 'cartao') {
      if (!numeroCartao || !cvv || !nomeTitular) {
        Alert.alert('Atenção', 'Preencha os dados do cartão');
        return;
      }
    }

    const idPedido = Math.floor(1000 + Math.random() * 9000);
    navigation.replace('Confirmacao', { pedidoId: idPedido });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>

      <Text style={styles.label}>Forma de Pagamento:</Text>
      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              flex: 1,
              backgroundColor: formaPagamento === 'cartao' ? '#4a148c' : '#6200ee',
              marginRight: 8,
              marginTop: 0, // evita espaçamento grande dentro da linha
            },
          ]}
          onPress={() => setFormaPagamento('cartao')}
        >
          <Text style={styles.buttonText}>Cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              flex: 1,
              backgroundColor: formaPagamento === 'pix' ? '#4a148c' : '#6200ee',
              marginLeft: 8,
              marginTop: 0,
            },
          ]}
          onPress={() => setFormaPagamento('pix')}
        >
          <Text style={styles.buttonText}>Pix</Text>
        </TouchableOpacity>
      </View>

      {formaPagamento === 'cartao' && (
        <>
          <Text style={styles.label}>Número do Cartão:</Text>
          <TextInput
            style={styles.input}
            value={numeroCartao}
            onChangeText={setNumeroCartao}
            placeholder="**** **** **** 1234"
            keyboardType="numeric"
          />

          <Text style={styles.label}>CVV:</Text>
          <TextInput
            style={styles.input}
            value={cvv}
            onChangeText={setCvv}
            placeholder="123"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Nome do Titular:</Text>
          <TextInput
            style={styles.input}
            value={nomeTitular}
            onChangeText={setNomeTitular}
            placeholder="Nome completo"
          />
        </>
      )}

      {formaPagamento === 'pix' && (
        <Text style={{ marginBottom: 15 }}>
          Você selecionou Pix. O QR será apresentado na confirmação.
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={realizarPagamento}>
        <Text style={styles.buttonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}
