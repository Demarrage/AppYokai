import { StyleSheet } from "react-native";
export const styleFormat = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2020",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 500,
    marginLeft: "auto",
    marginRight: "auto",
    resizeMode: "contain",
  },
  btnApp: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    backgroundColor: "#e62c4f",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  btn: {
    backgroundColor: "#e62c4f",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
