import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { cadastrar } from '../../servicos/requisicoesFirebase';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro({ navigation }) {  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  // useEffect(()=>{
  //   createUserWithEmailAndPassword(auth, "teste3@gmail.com", "12345678", null)
  //   .then((dadosUsuario)=>{
  //     console.log(dadosUsuario);
  //   })
  //   .catch((error)=>{
  //     const errorCode = error.code;
  //     const erroMessage = error.message;
  //     console.log(error);
  //     // ...
  //   })
  // })

  async function realizarCadastro(){
    await cadastrar(email, senha, confirmaSenha);
    setEmail('')
    setSenha('')
    setConfirmaSenha('')
  }



  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
      />

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
      />
      
      <Botao onPress={() => realizarCadastro()}>CADASTRAR</Botao>
    </View>
  );
}