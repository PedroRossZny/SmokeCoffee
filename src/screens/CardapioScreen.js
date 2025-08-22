import { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { mockProducts } from '../data/products';
import { Notifications, registrarParaNotificacoes } from '../services/notifications';
import { styles } from '../styles/global';

export default function CardapioScreen({ navigation }) {
  const [carrinho, setCarrinho] = useState({});

  useEffect(() => {
    (async () => {
      const token = await registrarParaNotificacoes();
      if (!token) {
        Alert.alert('Permissão negada para notificações!');
        return;
      }
      await Notifications.scheduleNotificationAsync({
        content: { title: 'Bem-vindo ao Smoke Coffee!', body: 'Explore nosso cardápio e peça seu café favorito.' },
        trigger: { seconds: 5 },
      });
    })();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificação recebida:', notification);
    });
    return () => subscription.remove();
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const quantidade = carrinho[produto.id]?.quantidade || 0;
    setCarrinho(prev => ({
      ...prev,
      [produto.id]: { ...produto, quantidade: quantidade + 1 }
    }));
  };

  const removerDoCarrinho = (produto) => {
    const quantidade = carrinho[produto.id]?.quantidade || 0;
    if (quantidade > 1) {
      setCarrinho(prev => ({
        ...prev,
        [produto.id]: { ...produto, quantidade: quantidade - 1 }
      }));
    } else {
      const novoCarrinho = { ...carrinho };
      delete novoCarrinho[produto.id];
      setCarrinho(novoCarrinho);
    }
  };

  const total = Object.values(carrinho).reduce((sum, item) => sum + item.price * item.quantidade, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio</Text>
      <FlatList
        data={mockProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const quantidade = carrinho[item.id]?.quantidade || 0;
          return (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>R$ {item.price.toFixed(2)}</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <TouchableOpacity
                  style={[styles.addButton, { backgroundColor: 'green', flex: 1, marginRight: 5 }]}
                  onPress={() => adicionarAoCarrinho(item)}
                >
                  <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.addButton, { backgroundColor: 'red', flex: 1, marginLeft: 5 }]}
                  onPress={() => removerDoCarrinho(item)}
                >
                  <Text style={styles.buttonText}>Remover</Text>
                </TouchableOpacity>
              </View>

              {quantidade > 0 && <Text style={{ marginTop: 5 }}>No carrinho: {quantidade}</Text>}
            </View>
          );
        }}
      />

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

      <TouchableOpacity style={styles.finalizarButton} onPress={() => navigation.navigate('Pagamento')}>
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Text style={styles.buttonText}>Trocar de Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
