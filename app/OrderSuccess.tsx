import { Container } from "@/components/Container";
import Colors from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderSuccess = () => {
  return (
    <Container>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: Colors.dark.white,
            textAlign: "center",
            fontSize: 28,
            fontStyle: "italic",
            marginBottom: 10,
          }}
        >
          ShopIru
        </Text>
        <Text style={styles.message}>Thank You</Text>
        <Text style={styles.message}>Order placed successfully!</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});

export default OrderSuccess;
