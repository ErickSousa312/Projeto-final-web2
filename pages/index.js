import Head from 'next/head'
import { useReducer, useState } from 'react'
import { set } from 'mongoose'
import Form from '@/components/Form/form'
import Category from '@/components/Category/category'
import InputText from '@/components/InputText/inputText'
import styles from '@/styles/indexCss/indexCss.module.css'
import Button from '@/components/Button/button'

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
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.cadastrar}>
          <h1 className={styles.h1Cadastro}>LOGO</h1>
          <h2 className={styles.h2Cadastro}>Cadastrar-se</h2>
          <h3 className={styles.h3Cadastro}>Ainda não possui uma <br/> conta? Cadastre-se<br/> agora mesmo!</h3>
          <Button width={120}>Cadastrar</Button>
        </div>
        <form className={styles.forms}>
          <h1>Login</h1>
          <h3 className={styles.h3Forms}>Faça login  e acompanhe todas as novidades das suas atléticas favoritas!</h3>
          <div className={styles.inputs}>
            <InputText
              obrigatorio={true}
              placeholder="Email"
              valor={dadosLogin.email}
              Alterado={(valor) => dispath({ type: 'setEmail', payload: valor })} />
            <InputText

              obrigatorio={true}
              placeholder="Senha"
              valor={dadosLogin.senha}
              Alterado={(valor) => dispath({ type: 'setSenha', payload: valor })}
            />
          </div>
          <div className={styles.OU}>
            <div className={styles.linha1}></div>
            <h2>  OU   </h2>
            <div className={styles.linha2}></div>
          </div>
          <Button margintop={"6em"} cor={"black"} width={120}>Entrar</Button>
        </form>
      </div>
    </div>

  )
}

