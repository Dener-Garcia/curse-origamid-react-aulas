
import { Children, useState } from "react"
import AppContextGlobal from "./Context"

const Provider = () => {

const [curse, setCurse] = useState("")

const globalVar = {
    nome: "dener",
    idade: 21,
    curse,
    setCurse
}
const meuProvider = () => {
return(
    <AppContextGlobal.Provider value={globalVar}>
        {Children}
    </AppContextGlobal.Provider>
)
}

export default meuProvider