import { useEffect, useState } from "react"

const useLocalStorage = (key, value) => {
    
 const handleGetStorage = () =>{
    const local = localStorage.getItem(key)
    return local ? local : value
 } 

 const [state, setState] = useState(handleGetStorage)

    useEffect(() => {
        localStorage.setItem(key, state)
    },[state, key]) // como tenho 2 argumentos no useEffect o key, e o state preciso passa-los como dependencia

    return [state, setState]
}
export default useLocalStorage