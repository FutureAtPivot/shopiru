import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import React, { useContext, useReducer } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Container } from "@/components/Container";
import Colors from "@/constants/Colors";
import { truncate } from "@/utils/truncate";
import ProductColor from "@/components/ProductColor";
import { useCart } from "@/store/CartContext";

const ProductDetail = () => {
  // Using Local Search Params to get Product Details
  const { id, name, price, image } = useLocalSearchParams();

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: Number(id),
      name: String(name),
      price: Number(price),
      image: String(image),
    };

    Alert.alert(
      "Add To Cart",
      `Do you want to add ${truncate(name as string, 20)} to cart?`,
      [
        {
          text: "Cancel",
          onPress: () => null,
        },
        {
          text: "Continue",
          onPress: () => {
            addToCart(product);
            router.replace("/(tabs)/checkout");
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Product Image */}
      <View
        style={{
          width: "100%",
          height: "35%",
          overflow: "hidden",
          backgroundColor: "lightgray",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={{ uri: String(image) }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.dark.background,
          width: "100%",
          paddingTop: 40,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
        >
          {/* Product Name */}
          <Text
            style={{
              color: Colors.dark.white,
              fontSize: 16,
              textAlign: "center",
              fontWeight: "400",
              maxWidth: 200,
              backgroundColor: "red",
            }}
          >
            {truncate(name as string, 50)}
          </Text>

          {/* Colors of Product */}
          <ProductColor />
        </View>
        {/* Product Description */}
        <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
          <Text
            style={{
              color: Colors.dark.white,
              fontSize: 14,
              paddingBottom: 8,
            }}
          >
            Product Description
          </Text>
          <Text
            style={{
              color: Colors.dark.gray,
              fontWeight: "300",
              fontSize: 12,
              lineHeight: 22,
              textAlign: "justify",
              width: "99%",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis, labore numquam incidunt aut velit, nam aliquam totam
            porro asperiores illum soluta, reiciendis iure vel eveniet dolorem
            voluptate dolores fugiat alias temporibus
          </Text>

          <Text
            style={{
              color: Colors.dark.gray,
              fontWeight: "300",
              fontSize: 12,
              lineHeight: 22,
              textAlign: "justify",
              width: "99%",
              paddingTop: 12,
            }}
          >
            porro asperiores illum soluta, reiciendis iure vel eveniet dolorem
            voluptate dolores fugiat alias temporibus ab minima consectetur.
            Nemo ratione ab natus nulla aspernatur, vitae similique reiciendis
            rem iste, nostrum commodi explicabo voluptate.
          </Text>
        </View>

        {/* cta btn | price */}
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "#000",
            position: "absolute",
            bottom: 0,
            left: 0,
            flexDirection: "row",
            alignItems: "center",
            gap: 32,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{ color: Colors.dark.white, fontSize: 24, marginLeft: 16 }}
          >
            ${price}
          </Text>

          <TouchableOpacity
            onPress={handleAddToCart}
            activeOpacity={0.7}
            style={{
              backgroundColor: "orange",
              paddingHorizontal: 10,
              paddingVertical: 18,
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
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
