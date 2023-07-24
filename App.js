import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FormContainer from './app/screens/FormContainer';
import AppNavigator from './app/AppNavigator';

export default function App() {
  return <AppNavigator/>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f6',
    margin: 4,
  },
  header: {
    fontSize: 15,
    textAlign: 'center'
  }
});
