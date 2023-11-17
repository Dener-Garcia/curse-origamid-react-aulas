import { useMemo, useState } from "react"

const UseMemo = () => {

    const [count, setCount] = useState(0)

    const value = useMemo( () => {
        const localItem = localStorage.getItem("favorito")
        console.log("Aconteceu o useMemo")
        return localItem
    }, [])
    
    return(
        <>
         <h2>Use Memo</h2>
        <p>Memoria um valor somente na montagem do componente, não atualizando novamente</p>
        <p>Muito utilizado em funções lentas do javascript como somar milhões de itens de um array</p>
        <p>Ele possuí um array de dependência para rodar a função caso atualize algo no array de dependência.</p>

        <div className="exemple">
            <button onClick={() => setCount(count + 1)}>Contar {count}</button>
        </div>
        </>
    )
}
export default UseMemo