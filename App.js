import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import LoginScreen from './component/LoginScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen></LoginScreen>
  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
