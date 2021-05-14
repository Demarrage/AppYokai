import * as React from "react";
import { View, Text, TextInput, Picker } from "react-native";
import { styleFormat } from "../CSS/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
let us = "";
let sh = "";

let nc = "";
let cf = "";
let sx = "";
let iu = "";
let ie = "";
let ic = "";

let lg = "";
let nr = "";
let cp = "";
let br = "";
let ce = "";

let tl = "";
let em = "";

export default function Cadastro() {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const [nomeCliente, setNomeCliente] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [sexo, setSexo] = React.useState("");

  const [logradouro, setLogradouro] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [complemento, setComplemento] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cep, setCEP] = React.useState("");

  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <View style={styleFormat.container}>
      <ScrollView horizontal={false}>
        {/* area do cadastro de ususario */}
        <View style={styleFormat.cxinput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Usuário"
            placeholderTextColor="white"
            value={usuario}
            keyboardType="email-address"
            onChangeText={(value) => setUsuario(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Senha"
            placeholderTextColor="white"
            value={senha}
            keyboardType="default"
            secureTextEntry
            onChangeText={(value) => setSenha(value)}
          />
        </View>
        {/* Fim da area de cadastro do cliente */}
        <View style={styleFormat.cxinput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Cliente"
            placeholderTextColor="white"
            value={nomeCliente}
            keyboardType="default"
            onChangeText={(value) => setNomeCliente(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="CPF"
            placeholderTextColor="white"
            value={cpf}
            keyboardType="number-pad"
            onChangeText={(value) => setCPF(value)}
          />

          <Picker
            mode="dropdown"
            selectedValue={sexo}
            onValueChange={setSexo}
            style={styleFormat.input}
          >
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Feminino" value="F" />
            <Picker.Item label="Outros" value="O" />
          </Picker>

          <TextInput
            style={styleFormat.input}
            placeholder="Nome Usuário"
            placeholderTextColor="white"
            value={usuario}
            keyboardType="email-address"
            onChangeText={(value) => setUsuario(value)}
          />
        </View>
        {/* area do cadastro de endereço */}
        <View style={styleFormat.cxinput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Logradouro"
            placeholderTextColor="white"
            value={logradouro}
            keyboardType="default"
            onChangeText={(value) => setLogradouro(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Numero"
            placeholderTextColor="white"
            value={numero}
            keyboardType="default"
            onChangeText={(value) => setNumero(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Complemento"
            placeholderTextColor="white"
            value={complemento}
            keyboardType="default"
            onChangeText={(value) => setComplemento(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Bairro"
            placeholderTextColor="white"
            value={bairro}
            keyboardType="default"
            onChangeText={(value) => setBairro(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="CEP"
            placeholderTextColor="white"
            value={cep}
            keyboardType="number-pad"
            onChangeText={(value) => setCEP(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="E-mail"
            placeholderTextColor="white"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        {/* Fim da area de cadastro do endereço */}

        {/* area do cadastro de contato */}
        <View></View>
        {/* Fim da area de cadastro do contato */}

        <TouchableOpacity style={styleFormat.btnCadastro}>
          <Text style={styleFormat.txtCadastro}>Cadastro</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
