import propTypes from 'prop-types'
import { useState } from "react"
import AppContextGlobal from "./Context"


//para o Eslint

const MyProvider = ({children}) => { // atraves das props podemos pegar os componentes filhos desse meu componente (lembre-se que englobamos esse componentes em outros la no App.jsx por isso precisamos do children para pegar os filhos deles) chamado MyProvider, tabem posso desistruturar em {children}

const [curse, setCurse] = useState("Origami React Curse")

const globalVar = {
    nome: "dener",
    idade: 21,
    curse,
    setCurse
}

return(
    <AppContextGlobal.Provider value={globalVar}>
        {children}
    </AppContextGlobal.Provider>
)
}

export default MyProvider

// definindo propTypes para o Eslint
MyProvider.propTypes = {
    children: propTypes.any,
}.isRequired