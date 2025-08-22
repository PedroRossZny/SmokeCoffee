import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/global';

export default function PreparoScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('PedidoFinalizado');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Seu pedido está sendo preparado...</Text>
    </View>
  );
}
