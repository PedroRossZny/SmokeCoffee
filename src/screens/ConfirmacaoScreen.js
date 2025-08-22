import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Notifications } from '../services/notifications';
import { styles } from '../styles/global';

export default function ConfirmacaoScreen({ route, navigation }) {
  const { pedidoId } = route.params;

  useEffect(() => {
    (async () => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Seu pedido está pronto!',
          body: 'Venha retirar seu café no balcão.',
        },
        trigger: { seconds: 5 },
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento Confirmado!</Text>
      <Text style={styles.subtitle}>Número do Pedido:</Text>
      <Text style={styles.pedido}>{pedidoId}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Cardapio')}>
        <Text style={styles.buttonText}>Voltar ao Cardápio</Text>
      </TouchableOpacity>
    </View>
  );
}
