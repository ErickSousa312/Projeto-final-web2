import { useReducer, useState } from 'react'
import styles from '@/styles/views/privateArea.module.css'
import Button from '@/components/Button/button'
import Navbar from '@/components/Navbar'
import Button2 from '@/components/Button/button2'
import { MdHistory, MdArrowForwardIos, MdArticle,MdOutlinePeople } from 'react-icons/md';
import { FcGoogle } from "react-icons/fc";
import { AiFillFileText } from "react-icons/ai";
import { HiOutlineMail, HiLockClosed, HiHome, } from "react-icons/hi";
import { BsPeople} from "react-icons/bs";
import { CgProfile,CgReadme} from "react-icons/cg";

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
      <Navbar zIndex={"3"}></Navbar>
      <div className={styles.container}>
        <div className={styles.barNavitaion} >
          <Button2
            marginBottom={"4px"}
            shadow={"5px 5px 12px rgba(0,0,0,30%)"}
            padding={"12px 19px"}
            margintop={"3em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={"89%"}>
            <CgProfile className={styles.iconGoogle} size={25}></CgProfile>
            Sua conta
          </Button2>
          
          <Button2
            margin={"4px 0px"}
            shadow={"5px 5px 12px rgba(0,0,0,30%)"}
            padding={"12px 11px"}
            margintop={"1em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={"89%"}>
              <CgReadme className={styles.iconGoogle} size={25}></CgReadme>
            Gerenciar Menbros
          </Button2>
        </div>
        <div className={styles.areaData}> </div>
      </div>
    </div>

  )
}

