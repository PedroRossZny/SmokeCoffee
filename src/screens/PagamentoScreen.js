import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/global';

export default function PagamentoScreen({ navigation }) {
  const [formaPagamento, setFormaPagamento] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [cvv, setCvv] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');

  const realizarPagamento = () => {
    const idPedido = Math.floor(1000 + Math.random() * 9000);
    navigation.replace('Confirmacao', { pedidoId: idPedido });
  };

  const isCartao = formaPagamento.toLowerCase().includes('cartão') || formaPagamento.toLowerCase().includes('cartao');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>

      <Text style={styles.label}>Forma de Pagamento:</Text>
      <TextInput
        style={styles.input}
        value={formaPagamento}
        onChangeText={setFormaPagamento}
        placeholder="Cartão / Pix"
      />

      {isCartao && (
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

      <TouchableOpacity style={styles.button} onPress={realizarPagamento}>
        <Text style={styles.buttonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}
