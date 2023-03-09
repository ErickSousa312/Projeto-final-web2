import Head from 'next/head'
import { useReducer, useState } from 'react'
import { set } from 'mongoose'
import Form from '@/components/Form/form'
import Category from '@/components/Category/category'
import InputText from '@/components/InputText/inputText'
import styles from '@/styles/views/privateArea.module.css'
import { MdHistory, MdArrowForwardIos, MdArticle } from 'react-icons/md';
import { FcGoogle } from "react-icons/fc";
import { AiFillFileText } from "react-icons/ai";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { CgProfile} from "react-icons/cg";
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
              <div className={styles.barNavitaion} style={{backgroundColor:"red"}}>oi</div>
              <div className={styles.areaData}>oi</div>
        </div>
    </div>

  )
}

