import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About VociGo 🤓</Text>
      <Text style={styles.text}>
        Hand-crafted by a highly caffeinated developer to help you master exactly 8 vocabulary words. 
        {"\n\n"}
        You are now fully equipped to survive in the wild... provided you only ever encounter:
        {"\n"}
        Dogs, cats, houses, trees, cars, apples, books, or the sun! 🐕🌳☀️
        {"\n\n"}
        Version 1.0.0
        {"\n"}
        (The "It Works On My Machine" Edition)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#a0a0a0',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
  },
});
