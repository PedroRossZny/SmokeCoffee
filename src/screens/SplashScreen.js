import { useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from '../styles/global';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Login'), 2500);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <ImageBackground
      source={{ uri: 'https://www.lahora.com.ec/wp-content/uploads/2023/05/ESPACIO-3-1536x1152.jpeg' }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Text style={styles.splashTitle}>🌫Smoke Coffee🌫</Text>
        <Text style={styles.splashSubtitle}>Bem-vindo à experiência perfeita do café</Text>
      </View>
    </ImageBackground>
  );
}
