const UseContext = () => {



    return(
        <>
        <h2>Use Context</h2>
    <p>O Contexto permite passarmos dados/estados a todos os componentes de filhos para pais por exemplo.
seriam como dados globais.</p>
    <p>Primeiro criamos um contexto que é javascript puro e depois envolvemos o nosso APP por esse contexto, ou podemos envolver somente os componentes que precisam daquele contexto.</p>
    <p>Para user esse recurso criamos um contexto da seguinte forma: <br/>
        <code>const NomeDoContexto = createContext()
            export default AppContextGlobal
        </code>
    </p>
    <p>Agora criamos um componente React para utilizar o provider que criamos anteriormente, dessa forma compatilhamos dados e ate estados em todo nosso componente: <br/>
        <code>
        </code>
    </p>
    
    <div className="exemple">
        <p>Este nome veio de um useContext: {}</p>
    </div>
        </>
    )
}

export default UseContext