import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Container } from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Colors from "@/constants/Colors";
import { useCart } from "@/store/CartContext";

const PRODUCTS = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 999,
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    image: "https://m.media-amazon.com/images/I/61O45C5qASL._AC_SL1000_.jpg",
  },
  {
    id: 3,
    name: "Apple iPad Pro",
    price: 799,
    image: "https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "Canon EOS Rebel T7",
    price: 549,
    image: "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg",
  },
  {
    id: 5,
    name: "Apple MacBook Air",
    price: 999,
    image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
  },
  {
    id: 6,
    name: "Bose QuietComfort 35 II",
    price: 299,
    image: "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "Microsoft Surface Pro 7",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71jl9NJuB9L._AC_SL1500_.jpg",
  },
  {
    id: 8,
    name: "Apple iPad Pro",
    price: 799,
    image: "https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SL1500_.jpg",
  },
  {
    id: 9,
    name: "Amazon Echo Dot",
    price: 49,
    image: "https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg",
  },
  {
    id: 10,
    name: "Google Nest Hub",
    price: 89,
    image: "https://m.media-amazon.com/images/I/71IDlSEh+zL._AC_SL1500_.jpg",
  },
  {
    id: 11,
    name: "Fitbit Charge 4",
    price: 149,
    image: "https://m.media-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg",
  },
  {
    id: 12,
    name: "Sony PlayStation 5",
    price: 499,
    image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg",
  },
  {
    id: 13,
    name: "Microsoft Xbox Series X",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_SL1500_.jpg",
  },
  {
    id: 14,
    name: "Nikon D3500",
    price: 499,
    image: "https://m.media-amazon.com/images/I/71x4e-N9E9L._AC_SL1500_.jpg",
  },
  {
    id: 15,
    name: "Canon EOS Rebel T7",
    price: 549,
    image: "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg",
  },
  {
    id: 16,
    name: "GoPro HERO9",
    price: 399,
    image: "https://m.media-amazon.com/images/I/71FMefD2AjL._AC_SL1500_.jpg",
  },
  {
    id: 17,
    name: "Samsung Galaxy Watch 3",
    price: 399,
    image: "https://m.media-amazon.com/images/I/71en3upLIxL._AC_SL1500_.jpg",
  },
  {
    id: 18,
    name: "Apple Watch Series 6",
    price: 399,
    image: "https://m.media-amazon.com/images/I/71bf9IpGjtL._AC_SL1500_.jpg",
  },
  {
    id: 19,
    name: "Roku Streaming Stick+",
    price: 49,
    image: "https://m.media-amazon.com/images/I/61vXnfYcSkL._AC_SL1500_.jpg",
  },
  {
    id: 20,
    name: "Apple AirPods Pro",
    price: 249,
    image: "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg",
  },
];

export default function ProductScreen() {
  const [products, setProducts] = useState(PRODUCTS);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    if (cart) {
      const filteredProducts = PRODUCTS.filter(
        (product) =>
          !cart.some((cartItem: any): boolean => cartItem.id === product.id)
      );
      setProducts(filteredProducts);
    }
  }, [cart]);

  return (
    <Container>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 16,
        }}
      >
        <Text style={{ color: "#eaeaea", fontSize: 18, fontWeight: "400" }}>
          Discover Products
        </Text>
        <View>
          <Ionicons
            name="filter-circle-outline"
            size={22}
            color={Colors.dark.white}
          />
        </View>
      </View>

      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingBottom: 56 }}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            onAddToCheckout={() => null}
          />
        )}
      />

      <StatusBar style="light" />
    </Container>
  );
}
