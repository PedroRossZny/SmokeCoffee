import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/global';

export default function PedidoFinalizadoScreen({ navigation }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Pedido Finalizado!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Cardapio')}>
        <Text style={styles.buttonText}>Fazer Novo Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}
