import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../button";
import Clock from "./clock";
import style from './Timer.module.scss'

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}
export default function Timer({ selecionado, finalizarTarefa} : Props) {
    const[tempo, setTempo] = useState<number>();
    
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    function regressiva (contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo}></Clock>
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar!
            </Button>
        </div>
    )
}