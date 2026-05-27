import { StyleSheet, Text, View } from "react-native";
import Voci from "../models/voci";

type VociItemProps = {
  voci: Voci;
};

export default function VociItem({ voci }: VociItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.term}>{voci.term}</Text>
      <Text style={styles.translation}>{voci.translation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // iOS Schatten
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    // Android Schatten
    elevation: 4,
  },
  term: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  translation: {
    fontSize: 18,
    fontWeight: "400",
    color: "#888888",
  },
});
