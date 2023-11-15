import { useState } from "react"

const UseStateHook = () => {

    // criando uma funcao para atualizar a variavel let ativoLet
    // repare que mesmo alterando o valor para false o texto nao mudou
    function changeLet() {
        ativoLet = !ativoLet
        console.log(ativoLet)
    }

    // simulando um estado com variavel
    let ativoLet = true

    // criando um state
    const [ativoState, setAtivoState] = useState(true)

    // criando uma funcao para atualizar o state quando houver um click no botao
    const handleButton = () => {
        setAtivoState(!ativoState)
        console.log("clicaado")
    }

    // criando um useState de objeto
    const [studentData, setStudentData] = useState({
        name: "Dener",
        age: 32
    })

    // adicionando mais itens ao state studentData atraves do click de um botao
    // abaixo eu esparramo as propriedades que ja existem no studentData e adiciono mais uma chamada curse, atualizando o objeto
    const handleAddData = () => {
        setStudentData({...studentData, curse: "React Origami"})
    }

    const array1 = ['Alguma coisa ', 'Alguma coisa ', 'Alguma coisa '] 
    
    // Atualizando um array de items com useState
    const [arrayItems, setArrayItems] = useState(array1)


    function handleaddItemArray() {
        setArrayItems([...arrayItems, "Alguma coisa "])
    }

    return(
        <>
            <h2>Use State</h2>
            <p>No React usamos esse hook para atualizar o estado de algo para realizarmos uma nova renderização do componente, coisa que não seria possível somente com variáveis de javascript</p>
            <p>Usamos os estados para modificar o comportamento da nossa interface assi como faziamos com as classes em javascript puro</p>
            <p>No Exemplo repare que apesar da variavel ativoLet ter mudado o componente não renderizou novamente é ai que entra o hook useState</p>
            <b>Quando alteramos o estado de um componente ele e seus filhos componentes também são renderizados novamente</b>

            <button disabled={!ativoLet} onClick={changeLet}>
                {ativoLet ? "Botao active via let" : "Botao Inative via let"}
            </button>

            <button disabled={!ativoState} onClick={(handleButton)}>
                {ativoState ? "Botao active via useState" : "Botao Inative via useState"}
            </button>

        <h3>Podemos trabalhar com objetos, strings, boleans, arrys e numero com o useState normalmente.</h3>
        <p>Abaixo estamos renderizando propriedades de um objeto de um useState, tambem podemos acrescentar mais itens a ele</p>

        <div className="student-dados">
            
            <p>{studentData.name}</p>
            <p>{studentData.age}</p>
            <p>{studentData.curse}</p>

            <button onClick={handleAddData}>Mostre o nome do curso</button>
        </div>

        <div className="array">
            <p>Atualizando um array de itens</p>
            <ul>
                {arrayItems.map((item, i) => <li key={i ++}>{item + i}</li>)}
            </ul>

            <button onClick={handleaddItemArray}>click para adicionar um novo item</button>
        </div>
        </>
    )
}

export default UseStateHook