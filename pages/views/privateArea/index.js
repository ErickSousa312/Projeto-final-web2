import { useReducer, useState } from 'react'
import styles from '@/styles/views/privateArea.module.css'
import Button from '@/components/Button/button'
import Navbar from '@/components/Navbar'

function reducer(dadosLogin, action) {
  switch (action.type) {
    case 'setEmail':
      console.log(dadosLogin)
      return { ...dadosLogin, email: action.payload };
    case 'setSenha':
      return { ...dadosLogin, senha: action.payload };
    default:
      throw new Error('Tipo de ação desconhecido.');
  }
}
export default function Home() {
    
  const [dadosLogin, dispath] = useReducer(reducer, {
    nomeAtletica: "",
    nomePresidente: "",
    cpfPresidente:"",
    email:"",
    Senha:""
  });

  return (
    <div className={styles.mainContainer}>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.barNavitaion} >
          <Button
            shadow={"5px 5px 12px rgba(0,0,0,30%)"}
            padding={"12px 19px"}
            margintop={"1em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={90}>
            Cadastrar
          </Button>
          <Button
            shadow={"5px 5px 12px rgba(0,0,0,30%)"}
            padding={"12px 19px"}
            margintop={"1em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={90}>
            Cadastrar
          </Button>
          <Button
            shadow={"5px 5px 12px rgba(0,0,0,30%)"}
            padding={"12px 19px"}
            margintop={"1em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={90}>
            Cadastrar
          </Button>
        </div>
        <div className={styles.areaData}>oi</div>
      </div>
    </div>

  )
}

