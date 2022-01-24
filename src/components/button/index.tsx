import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component <{
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const {type="button"} = this.props; //attribui o valor button ao type caso não venha definido nas props
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;