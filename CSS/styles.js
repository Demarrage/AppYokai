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
  input: {
    width: 300,
    padding: 5,
    color: "white",
    marginBottom: 10,
    borderBottomColor: "silver",
    borderBottomWidth: 1,
  },
  btnCadastro: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#e62c4f",
    padding: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
  },
  txtCadastro: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  cxinput: {
    backgroundColor: "#000",
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    opacity:0.5 

  },
});
