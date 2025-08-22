import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import './src/services/notifications'; // seta o NotificationHandler

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}