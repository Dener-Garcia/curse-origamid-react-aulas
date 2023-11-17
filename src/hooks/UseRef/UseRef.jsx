import { useRef } from "react"
import { useState } from "react"

const UseRef = () =>{

const [comment, setComment] = useState([])
const [inputForInput, setInputForInput] = useState("")

const inputElement = useRef()

const handleClick = () => {
    setComment([...comment, inputForInput])
    setInputForInput("") // limpando o input apos adicionar o comentario
    inputElement.current.focus() // usando o useRef vamos adicionar o focus no input novamente
}

    return(
    <>
    <h2>Use Ref</h2>
        <p>O useRef retorna um objeto com uma única propriedade o <b>current</b>. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do componente</p>
        <p>Ainda podemos utiliza-lo para referirmos a um elemento no DOM, sem usar o querySelector</p>
        <p>Normalmente utilizamos ele dentro de um useEffect</p>

    <div className="exemple"> 
    <h3>Vamos construir um formulario para adicionar comentarios a uma div</h3>
    <p>Para adicionar o useRef vamos usar o input abaixo, quando clicarmos no Enviar queremos que o focus continue no input para digitar novamente sem precisar selecionar o campo </p>
    {
    comment.map((comm, i) => (
    <li key={i++}>{comm}</li>))
    }
    <input type="text" 
    placeholder="digite algo" 
    value={inputForInput} 
    onChange={(e) => {setInputForInput(e.target.value)}}
    ref={inputElement}
    />
    <button onClick={handleClick}>Enviar</button>
    </div>
    </>
    )
}

export default UseRef