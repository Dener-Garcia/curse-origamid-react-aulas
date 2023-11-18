
import { useContext } from "react"
import AppContextGlobal from "../../context/Context"


const UseContext = () => {

const {curse, setCurse} = useContext(AppContextGlobal)

    return(
        <>
        <h2>Use Context</h2>
    <p>O Contexto permite passarmos dados/estados a todos os componentes de filhos para pais por exemplo.
seriam como dados globais.</p>
    <p>Para usar esse recurso criamos um contexto através do <code>createContext()</code> veja o arquivo &quot;src/context/Context.js&quot;
    </p>
    <p>Agora criamos um componente React para utilizar o provider que criamos anteriormente, dessa forma compatilhamos dados e ate estados em todos os componente que seram envolvidos pelo contexto. 
     Esse componente React vai retornar nosso <code>context.provider</code> veja o arquivo &quot;src/context/Provider.jsx&quot;
    </p> 
    <p>Agora todos os compoentes que forem filhos do nosso .provider vão compartilhar informações entre si, podemos envolver todos componentes no App.jsx ou somente componentes que queremos compartilhar informações, veja o arquivo src/App.jsx e procure pelo componente &quot;MyProvider&quot; <b>Repare que ele esta englobando outros componentes dentro das tags de abertura e fechamento</b></p>
    <p>Para acessar ou alterar um estado que seja global podemos desistruturar a informação que queremos e atribui-la a um useContext(NomeContexto)</p>
    <h3>Veja o exemplo abaixo</h3>
    
    <div className="exemple">
        <p>Estou fazendo o curso: <b>{curse}</b> essa informação veio de um useContext que montei num componente chamado &quot;MyProvider&quot;</p>
        <p>No Input abaixo eu posso passar um novo estado para meu curse</p>

        <input type="text" 
        placeholder="Altere o nome do curso:" 
        onChange= { (e) => { setCurse ( e.target.value ) } }
        />
    </div>
        </>
    )
}

export default UseContext