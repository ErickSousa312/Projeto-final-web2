import styles from '@/styles/button/button.module.css'

const Button = (props) => {
    return (
        <button
            className={styles.botao}
            style={{
                border: props.border,
                backgroundColor: props.backgroundColor,
                boxShadow: props.shadow,
                width: props.width,
                color: props.cor,
                marginTop: props.margintop,
                padding: props.padding,
                margin:props.margin,
                position: props.position
            }}>
            {props.children}
        </button>
    )
}
export default Button