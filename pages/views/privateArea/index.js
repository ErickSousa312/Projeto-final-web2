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
          fontSize={"12px"}s
            marginBottom={"4px"}
            padding={"12px 19px"}
            margintop={"3em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={"89%"}>
            <CgProfile className={styles.iconGoogle} size={20}></CgProfile>
            Sua conta
          </Button2>
          
          <Button2
            fontSize={"12px"}
            margin={"4px 0px"}
            padding={"10px 14px"}
            margintop={"1em"}
            backgroundColor={'white'}
            border={'none'}
            cor={"black"}
            width={"89%"}>
              <CgReadme className={styles.iconGoogle} size={22}></CgReadme>
            Gerir Menbros
          </Button2>
        </div>
        <div className={styles.areaData}> 
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum massa euismod magna gravida laoreet.
      Nullam imperdiet purus vel mi blandit sollicitudin. Donec ut quam vel purus lobortis tempor. Suspendisse potenti.
      In hac habitasse platea dictumst. Duis gravida dictum purus, id mollis est finibus eu. Morbi ut semper eros.
    </p>

    <p>
      Phasellus finibus urna at quam venenatis efficitur. Nulla facilisi. Nullam in lectus ante. Nulla vitae elit vel
      lectus dignissim ultricies eget vitae turpis. Vestibulum commodo volutpat venenatis. Nam vel elit purus. Sed
      fringilla lorem eu mauris ultricies, a malesuada neque ultricies. Praesent pharetra dapibus dolor, in viverra
      sapien bibendum ac.
    </p>

    <p>
      Mauris vel ultrices velit. In hac habitasse platea dictumst. Etiam ut eros non nulla ullamcorper feugiat eu eu
      neque. Aenean ac nisl velit. Aliquam erat volutpat. Aenean vel elit at elit ornare molestie. Maecenas tincidunt
      justo vel urna facilisis ultrices. Nulla ac nulla velit. Nulla facilisi.
    </p>

    <p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p>
    <p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p><p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p><p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p><p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p><p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p><p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p><p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p>
    <p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p>
    <p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p>
    <p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p>
    <p>
      Pellentesque suscipit ipsum id lectus vestibulum faucibus. Sed ut finibus quam. Curabitur feugiat lobortis
      dolor, ut pharetra mauris rutrum ut. Nulla facilisi. Fusce congue iaculis lorem id suscipit. Suspendisse suscipit
      consectetur urna, ac aliquam nunc rutrum eu. Fusce non diam non nunc auctor accumsan. Suspendisse porta, felis
      sit amet malesuada iaculis, mauris lorem tempor magna, non ultricies leo dolor non mauris.
    </p>
    </div>
      </div>
    </div>

  )
}

