import { useEffect, useState } from "react"
import fetchUrl from "../../api/fetch"

const ExerciceUseEffect = () => {

    const [product, setProduct] = useState([])
    const [nameProduct, setNameProduct] = useState("")

    const handleSmartphone = () => {
        setNameProduct("smartphone")
        localStorage.setItem("favorito", "smartphone");
    }

    const handleNotebook = () => {
        setNameProduct("notebook")
        localStorage.setItem("favorito", "notebook");
}


    

    useEffect(() =>{
        fetchUrl(`https://ranekapi.origamid.dev/json/api/produto/${nameProduct}`)
            .then((res) => setProduct(res))
            .catch((err) => console.log(err, "falha na requisicao"))
    }, [nameProduct])

useEffect(() =>{
    const productStoraged = localStorage.getItem("favorito") 
    productStoraged ? setNameProduct(productStoraged) : console.log("nao tem mada local storage ")
}, [] )



    return(
        <>
        <div className="exercice">
            <h3>Exercicio do UseEffect</h3>
            <p>Quando o usuario clicar em um dos botões faça um fetch retornando os dados</p>
            <p>Deve-se ter uma preferência como valor padrão e salva-la no local storage</p>
        </div>
        <div className="result-exercice">
            <span>Item favorito: <b>{localStorage.getItem("favorito")}</b> </span>
            <p>Produto: {product.nome}</p>
            <span>Valor: R$ {product.preco} </span>
            <div className="buttons">
                <button onClick={handleNotebook}>Notebook</button>
                <button onClick={handleSmartphone}>SmartPhone</button>
            </div>

            
        </div>
        </>
    )
}

export default ExerciceUseEffect