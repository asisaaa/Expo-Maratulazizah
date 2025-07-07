import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "chocolate",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Mar'atul Azizah
        </Text>
      </View>
      <View
        style={{
          width: 120,
          height: 60,
          backgroundColor: "black",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          105841105222
        </Text>
      </View>
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 60,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "tomato",
        }}
      />
    </View>
  );
}
