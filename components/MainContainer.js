import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import styles from '../styles/MainContainer.module.css'

export default function MainView({ children }) {
  return (
    <>
      <Head>
        <title>CountCust</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para você+
          "
        ></meta>
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  )
}
