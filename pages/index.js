import Head from 'next/head'
import { useReducer, useState } from 'react'
import { set } from 'mongoose'
import Form from '@/components/Form/form'
import Category from '@/components/Category/category'
import InputText from '@/components/InputText/inputText'
import styles from '@/styles/indexCss/indexCss.module.css'

function reducer(dadosLogin, action) {
  switch (action.type) {
    case 'setEmail':
      console.log(dadosLogin)
       return{ ...dadosLogin, email: action.payload};
    case 'setSenha':
      return { ...dadosLogin, senha: action.payload };
    default:
      throw new Error('Tipo de ação desconhecido.');
  }
}
export default function Home() {
  
  const [dadosLogin, dispath] = useReducer(reducer, {
      email:"",
      senha: ""
  });


  return (
    <div className={styles.container}>
      <div className={styles.cadastrar}>
          <h1>LOGO</h1>
          <h2>Cadastrar-se</h2>
      </div>
      <form>
        <h1>Fazer login</h1>
        <InputText
        obrigatorio={true}
        placeholder="Email"
        valor={dadosLogin.email}
        Alterado={(valor) => dispath({ type: 'setEmail', payload: valor })}/>
        <InputText
          obrigatorio={true}
          placeholder="Senha"
          valor={dadosLogin.senha}
          Alterado={(valor) => dispath({ type: 'setSenha', payload: valor })}
        />
      </form>
    </div>
  )
}
