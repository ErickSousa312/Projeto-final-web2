import styles from '@/styles/button/button.module.css'
import { useEffect, useState } from 'react'

type Button={
    border?: string;
    backgroundColor?: string;
    shadow?: string;
    width?: number;
    cor?: string;
    margintop?: string;
    padding?: string;
    position?: string;
    marginBottom?: string;
    margin2?: string;
    children: React.ReactNode;
    className?: string;
}

const Button = (props: Button) => {
    const estilo = props.className || styles.botao
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
                marginBottom: props.marginBottom,
                margin: props.margin2
            }}>
            {props.children}
        </button>
    )
}
export default Button