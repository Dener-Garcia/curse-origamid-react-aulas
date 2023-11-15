const fetchUrl = async (url) => {
    try{
        const data = await fetch(url)
        const dataConverted = await data.json()
        return dataConverted
    }
    catch (err) {
        console.log(err.message, "erro requisicao")
    }
    
}

export default fetchUrl