import styles from '@/styles/button/button2.module.css'
import { useEffect, useState } from 'react'
import Button from '@/components/Button/button';

type Button2 = {
    border?: string;
    backgroundColor?: string;
    shadow?: string;
    width?: string;
    cor?: string;
    padding?: string;
    position?: string;
    marginBottom?: string;
    margin2?: string;
    children: React.ReactNode;
    className?: string;
    marginLeft?:string;
    marginRight?:string;
    fontSize?:string;
    margintop?: string;
    margin?:string

}

const Button2 = (props:Button2) => {
    const estilo = props.className || styles.botao
    return (
        <button
            className={styles.botao2}
            style={{
                border: props.border,
                backgroundColor: props.backgroundColor,
                boxShadow: props.shadow,
                width: props.width,
                color: props.cor,
                padding: props.padding,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
                fontSize: props.fontSize,
                marginTop: props.margintop,
            }}>
            {props.children}
        </button>
    )
}
export default Button2