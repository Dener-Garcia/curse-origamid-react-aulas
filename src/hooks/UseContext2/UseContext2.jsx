import { useContext } from "react"
import AppContextGlobal from "../../context/Context"

const UseContext2 = () => {

const {setCurse} = useContext(AppContextGlobal)

    return(
        <>
            <p>Veja que esse input que está em outro componente chamado UseContext2 também pode alterar o nome do curso, já que esse componente está envolvido pelo nosso contexto também</p>

            <input type="text" 
            placeholder="Altere o nome do curso 2:" 
            onChange= { (e) => { setCurse ( e.target.value ) } }
            />
        </>
    )
}

export default UseContext2