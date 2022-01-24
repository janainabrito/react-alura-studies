import Button from "../button";
import Clock from "./clock";
import style from './Timer.module.scss'

export default function Timer() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock></Clock>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}