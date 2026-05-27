import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import VociItem from "../components/VociItem";
import Voci from "../models/voci";

const vociList: Voci[] = [
  { term: "Dog", translation: "Hund" },
  { term: "Cat", translation: "Katze" },
  { term: "House", translation: "Haus" },
  { term: "Tree", translation: "Baum" },
  { term: "Car", translation: "Auto" },
  { term: "Apple", translation: "Apfel" },
  { term: "Book", translation: "Buch" },
  { term: "Sun", translation: "Sonne" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>VociGo</Text>
        <Text style={styles.subtitle}>Meine Vokabel-Lern-App</Text>
      </View>

      <FlatList
        data={vociList} // Tipp: Testen Sie den leeren State, indem Sie dies auf data={[]} setzen
        renderItem={({ item }) => <VociItem voci={item} />}
        keyExtractor={(item) => item.term}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={60} color="#a0a0a0" />
            <Text style={styles.emptyText}>Noch keine Vokabeln vorhanden.</Text>
          </View>
        }
      />

      <Link href="/about" style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "#a0a0a0",
    fontSize: 18,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#4facfe",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
    overflow: "hidden", // Important for iOS borders on Link text
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    color: "#a0a0a0",
    fontSize: 18,
    marginTop: 15,
  },
});
