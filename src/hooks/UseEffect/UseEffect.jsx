import { useEffect, useState } from "react"

const UseEffect = () => {

const [count, setCount] = useState(0)

useEffect(()=>{
    console.log("useEffect com array vazio []")
}, [])

useEffect(()=>{
    console.log("useEffect com um state de dependencia")
}, [count])

return(
    <>
    <h2>Use Effect</h2>
    <p>Todo componente possui um ciclo de vida, os principais momentos sao quando um componente é renderizado, atualizado ou destruido</p>
    <p>A estrutura do useEffect conta com um array de dependencia que basicamente define quando o useEffect deve renderizar novamente para isso contamos com algumas opções</p>
    <ul>
        <li>Array vazio <code>[]</code> = executa so uma vez quando componente é renderizado</li>
        <li>useState dentro do array = executa toda vez que o state mudar</li>
        <li>multiplas dependencias = como é um array <code>[]</code> eu posso por virgula e colocar varias dependencias nele</li>
    </ul>
    <p>Podemos ter vários useEffect no mesmo componente veja no console log que um dos useEffect lincamos ao proprio count que é um useState, assim sempre que ele muda, o que estiver dentro do useEffect tambem muda</p>

    <button onClick={()=>{setCount(count + 1)}}>Incrementar {count}</button>
    </>
)
}

export default UseEffect