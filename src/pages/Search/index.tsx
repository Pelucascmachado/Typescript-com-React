import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function Search() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
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
