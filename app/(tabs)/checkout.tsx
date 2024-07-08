import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Container } from "@/components/Container";
import Colors from "@/constants/Colors";
import { useCart } from "@/store/CartContext";
import CheckoutItem from "@/components/CheckoutItem";

const CheckoutScreen = () => {
  const { cart, clearCart, removeFromCart } = useCart();
  const router = useRouter();

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    Alert.alert("Place Order", "Are you sure you want to place an order", [
      {
        text: "Yes, I want to order",
        onPress: () => {
          clearCart();
          router.replace("/OrderSuccess");
          setTimeout(() => {
            router.replace("/");
          }, 3000);
        },
      },
    ]);
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.emptyMessage}>No products in checkout yet.</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingTop: 40, gap: 12 }}
          renderItem={({ item }) => (
            <CheckoutItem
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              handleRemoveFromCart={() => handleRemoveFromCart(item.id)}
            />
          )}
        />
      )}
      {cart.length > 0 && (
        <View
          style={{
            backgroundColor: "#000",
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleCheckout}
            style={{
              backgroundColor: "orange",
              paddingHorizontal: 22,
              paddingVertical: 16,
              borderRadius: 12,
              flex: 1,
            }}
          >
            <Text
              style={{
                color: Colors.dark.white,
                fontSize: 16,
                fontWeight: "500",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyMessage: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});

export default CheckoutScreen;
