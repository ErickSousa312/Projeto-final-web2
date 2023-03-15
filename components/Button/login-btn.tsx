import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Children, useEffect } from "react";
import styles from '@/styles/button/button.module.css'


type BtnProps = {
  border?: string;
  backgroundColor?: string;
  shadow?: string;
  width?: string;
  cor?: string;
  margintop?: string;
  padding?: string;
  position?: string;
  marginBottom?: string;
  margin2?: string;
  children: React.ReactNode;
}
export default function Btn(props:BtnProps) {
  const router = useRouter();
  const { data: session } = useSession();

  async function login(){
    console.log("oi")
    signIn("google")
    router.replace("/views/privateArea2")
  }

  return (
    <>
      <button className={styles.botao}
        style={{
          border: props.border,
          backgroundColor: props.backgroundColor,
          boxShadow: props.shadow,
          width: props.width,
          color: props.cor,
          marginTop: props.margintop,
          padding: props.padding,
          marginBottom: props.marginBottom,
          margin: props.margin2
        }}
        onClick={login}>{props.children}</button>
    </>
  )
}
