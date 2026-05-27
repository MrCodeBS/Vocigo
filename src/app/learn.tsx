import { StyleSheet, Text, View } from 'react-native';

export default function LearnScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vokabeln lernen</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 42,
        marginBottom: 5,
    },
});