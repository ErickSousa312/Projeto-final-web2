import styles from '@/styles/button/button.module.css'

const Button =(props)=>{
    return(
        <button className={styles.botao} style={{width:props.width, color: props.cor, marginTop: props.margintop}}>
            {props.children}
        </button>
    )
}
export default Button