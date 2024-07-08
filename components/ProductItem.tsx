// components/ProductItem.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "@/constants/Colors";
import ProductColor from "./ProductColor";
import { truncate } from "@/utils/truncate";
import { router } from "expo-router";

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCheckout: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  name,
  price,
  image,
  onAddToCheckout,
}) => {
  // Handle Navigation to product detail
  const handleProductDetails = () => {
      onAddToCheckout(id)
    router.navigate({
      pathname: "/ProductDetail",
      params: { id, name, price, image },
    });
  };

  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.7}
      onPress={handleProductDetails}
      style={{
        borderRadius: 8,
        padding: 8,
        width: "50%",
        // backgroundColor: "#000",
      }}
    >
      {/* Product Image */}
      <View
        style={{
          width: "100%",
          height: 180,
          borderRadius: 8,
          marginBottom: 20,
          overflow: "hidden",
          backgroundColor: "lightgray",
            alignItems: 'center',
            justifyContent: "center"
        }}
      >
        <Image
          style={{ width: "90%", height: "90%",}}
          resizeMode="contain"
          source={{
            uri: image,
          }}
        />
      </View>

      {/* Product Details */}
      <View
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Product Name */}
        <Text
          style={{
            color: Colors.dark.white,
            fontSize: 14,
            textAlign: "center",
            fontWeight: "400",
            maxWidth: 150,
          }}
        >
          {truncate(name, 30)}
        </Text>

        {/* Product Price */}
        <Text
          style={{
            color: Colors.dark.gray,
            textAlign: "center",
            fontWeight: "300",
            fontSize: 12,
          }}
        >
          ${price}
        </Text>

        {/* Colors of Product */}
        <ProductColor />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
