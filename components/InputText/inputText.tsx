import styles from '@/styles/inputText/inputText.module.css'

type InputText2 = {
   type?: string,
   valor: string,
   Alterado:(valor:string)=>void,
   obrigatorio?: boolean,
   placeholder?: string
}


const InputText = (props: InputText2) => {

   const Digitado = (evento:React.ChangeEvent<HTMLInputElement>) => {
      props.Alterado(evento.target.value)
   }

   return (
      <div className={styles['campo-texto'] } >
         <input
            className={styles.input}
            type={props.type}
            value={props.valor}
            onChange={Digitado}
            required={props.obrigatorio}
            placeholder={props.placeholder}
         />
      </div>
   )
}
 
 export default InputText