import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Avatar from "./avatar";
import State from "./state";
import ListOfTransactions from "./transaction";
import transactionData from "./list";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import themeContext from "../context/themeContext";

const Home = () => {
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[styles.body, { backgroundColor: theme.background }]}>
            <ScrollView>
                <View style={[styles.container, { backgroundColor: theme.background }]}>
                <Avatar
                    name="DARFOUR BISMARK"
                    message="Welcome back,"
                    avatar="data:image/jpeg;base64,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"
                />
                
                <Image
                    source={require("../assets/Card.png")}
                    style={styles.image}
                />
                <State />
                <View style={styles.title}>
                    <Text style={[styles.transaction,{color : theme.color}]}>Transaction</Text>
                    <Text style={styles.seeAll}>See All</Text>
                </View>
            </View>
            <ListOfTransactions transactionData={transactionData} />
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        gap:200,
    },
    transaction: {
        color: "#333",
        fontSize: 20,
    },
    seeAll: {
        color: "#007AFF",
        fontSize: 16,
    },
    image: {
        width: 370,
        height: 220,
        resizeMode: "cover",
    },
});

export default Home;