import Head from 'next/head'
import { useReducer, useState, useEffect} from 'react'
import { set } from 'mongoose'
import Form from '@/components/Form/form'
import Category from '@/components/Category/category'
import InputText from '@/components/InputText/inputText'
import styles from '@/styles/indexCss/indexCss.module.css'
import { MdHistory, MdArrowForwardIos } from 'react-icons/md';
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import Button from '@/components/Button/button'
import { signIn, signOut, useSession,getSession } from "next-auth/react";
import Btn from '@/components/Button/login-btn'
import { useRouter } from "next/router";


async function redirectElseSignedIn() {
  const session = await getSession();
  if (!session) {
    return {
      redirect: {
        destination: '/views/privateArea2',
        permanent: true,
      },
    }
  }else{
    return {
      redirect: {
        destination: '/a',
        permanent: true,
      },
    }
  }
}
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
  const router = useRouter();
  const { data: session, status } = useSession();
  
  const [dadosLogin, dispath] = useReducer(reducer, {
    email: "",
    senha: ""
  });

  async function verify(){
    if(status=='authenticated'){
      router.replace("/views/privateArea2")
    }
  }

  useEffect(()=>{
    console.log(status)
    verify()
  })



  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.cadastrar}>
          <h1 className={styles.h1Cadastro}>LOGO</h1>
          <h2 className={styles.h2Cadastro}>Cadastrar-se</h2>
          <h3 className={styles.h3Cadastro}>Ainda não possui uma <br /> conta? Cadastre-se<br /> agora mesmo!</h3>
          <Button width={120}>Cadastrar</Button>
        </div>
        <form className={styles.forms}>
          <h1 style={{fontWeight: "900", fontSize: "43px" }}>Login</h1>
          <h3 className={styles.h3Forms}>Faça login e acompanhe todas as novidades<br /> das suas atléticas favoritas!</h3>
          <div className={styles.inputs}>
            <HiOutlineMail size={25} className={styles.iconEmail} />
            <InputText obrigatorio={true}
              placeholder="Email"
              valor={dadosLogin.email}
              Alterado={(valor) => dispath({ type: 'setEmail', payload: valor })} ></InputText>
            <HiLockClosed size={25} className={styles.iconEmail} />
            <InputText
              type="password"
              obrigatorio={true}
              placeholder="Senha"
              valor={dadosLogin.senha}
              Alterado={(valor) => dispath({ type: 'setSenha', payload: valor })}
            />
          </div>
          <Button
            shadow={"5px 5px 12px rgba(0,0,0,30%)"}
            padding={"8px 1px"}
            margintop={"1em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={90}>
            <MdArrowForwardIos className={styles.iconBack} size={25} />
          </Button>
          <div className={styles.OU}>
            <div className={styles.linha1}></div>
            <h2>OU</h2>
            <div className={styles.linha2}></div>
          </div>
          
        <Btn 
        shadow={"5px 5px 12px rgba(0,0,0,30%)"}
            backgroundColor={'white'}
            border={'none'}
            margintop={"2em"}
            adding={"10px 20px"}
            cor={"black"}>
            <FcGoogle className={styles.iconGoogle} size={27}></FcGoogle> Entar com o google
        </Btn>
        </form>
      </div>
    </div>

  )
}
