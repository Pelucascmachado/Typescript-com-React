import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
