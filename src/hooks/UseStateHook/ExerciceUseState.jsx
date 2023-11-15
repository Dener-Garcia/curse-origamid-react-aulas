import { useState } from "react"
import fetchUrl from "../../api/fetch"

const ExerciceUseState = () =>{

    const handleTablet = async () => {

        fetchUrl("https://ranekapi.origamid.dev/json/api/produto/tablet")
            .then((res) => {
                setstatusFetch("Buscando")
                setProduct(res)
                setLoading(false)
        })
    }

    const handleSmartphone = async () => {
        
        fetchUrl("https://ranekapi.origamid.dev/json/api/produto/smartphone")
        
            .then((res) => {
                setstatusFetch("Buscando")
                setProduct(res)
                setLoading(false)
        })
    }


    const handleNotebook = async () => {
        setstatusFetch("Buscando")
        fetchUrl("https://ranekapi.origamid.dev/json/api/produto/notebook")
        
            .then((res) => {
                setstatusFetch("Buscando")
                setProduct(res)
                setLoading(false)
        })
    }

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [statusFetch, setstatusFetch] = useState("")
    
    return(
        <>
        <p>O Exercício consiste em fazer um fetch a uma determinada URL, deve ter 3 botões e deve mostrar um produto por vez, enquanto o produto não aparece mostre a mensagem Buscando seu produto</p>

        {

            loading ? <h3>{statusFetch}</h3> : <div className="product">        <h3>Nome do produto: {product.nome}</h3>
            <p>Valor: R$ {product.preco}</p>
            <img src={product.fotos[0].src} width="200px" height="auto" alt="Imagem produto" />
            </div>
        }

        <div className="fetchBtns">

        <button onClick={handleTablet}>Tablet</button>
        <button onClick={handleSmartphone}>SmartPhone</button>
        <button onClick={handleNotebook}>Notebook</button>
        </div>
        </>
    )
}

export default ExerciceUseState