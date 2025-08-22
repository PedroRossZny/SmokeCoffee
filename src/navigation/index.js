import { createStackNavigator } from '@react-navigation/stack';

import CadastroScreen from '../screens/CadastroScreen';
import CardapioScreen from '../screens/CardapioScreen';
import ConfirmacaoScreen from '../screens/ConfirmacaoScreen';
import EditarPerfilScreen from '../screens/EditarPerfilScreen';
import LoginScreen from '../screens/LoginScreen';
import PagamentoScreen from '../screens/PagamentoScreen';
import PedidoFinalizadoScreen from '../screens/PedidoFinalizadoScreen';
import PerfilScreen from '../screens/PerfilScreen';
import PreparoScreen from '../screens/PreparoScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Cardapio" component={CardapioScreen} />
      <Stack.Screen name="Preparo" component={PreparoScreen} />
      <Stack.Screen name="PedidoFinalizado" component={PedidoFinalizadoScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} />
      <Stack.Screen name="Pagamento" component={PagamentoScreen} />
      <Stack.Screen name="Confirmacao" component={ConfirmacaoScreen} />
    </Stack.Navigator>
  );
}