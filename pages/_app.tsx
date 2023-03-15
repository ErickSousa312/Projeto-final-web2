import '../styles/globals.css'
import { motion } from "framer-motion";
import MainContainer from '../components/MainContainer'
import { useRouter } from "next/router";

import type { AppProps } from 'next/app'

interface AppProps2 {
  Component: React.ElementType;
  children: React.ReactNode;
  session?: any;
}

 function App({ Component, children , session}:AppProps2):JSX.Element {
  const router = useRouter();
  return ( 
    <motion.div 
    key={router.route}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
  <MainContainer session={session}>
    <Component>{children}</Component>
  </MainContainer>
  </motion.div>
  )

}

export default App;
