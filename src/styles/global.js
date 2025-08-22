import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 30, borderRadius: 15, alignItems: 'center' },
  splashTitle: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  splashSubtitle: { fontSize: 16, color: '#ddd', textAlign: 'center' },

  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  title: { marginBlockStart: 40, fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitle: { fontSize: 18 },

  input: { borderWidth: 1, borderColor: '#aaa', padding: 15, marginBottom: 5, borderRadius: 10 },
  showPassword: { marginBlock: 1, marginLeft: 15, color: '#6200ee' },

  button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 30 },
  buttonText: { color: '#fff', fontWeight: 'bold' },

  card: { backgroundColor: '#eee', padding: 15, borderRadius: 8, marginBottom: 10 },
  image: { width: 50, height: 50, marginBottom: 5 },
  productName: { fontWeight: 'bold', fontSize: 16 },
  addButton: { backgroundColor: '#6200ee', padding: 8, borderRadius: 5, alignItems: 'center' },
  finalizarButton: { backgroundColor: 'green', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  logoutButton: { backgroundColor: 'red', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },

  label: { fontSize: 16, marginBottom: 5 },
  pedido: { fontSize: 32, fontWeight: 'bold', marginVertical: 20, color: '#8B4513' },
});
