import useLocalStorage from "./useLocalStorage"

const CustomHook = () => {

const [user, setUser] = useLocalStorage("Usuário", "")
    
    return(
        <>
         <h2>Custom Hooks</h2>
    <p>Podemos criar nossos próprios hooks, para evitar a repetição de código, Para criar um hook basta criar um componente que começe com a palavra reservada &quot;use&quot;</p>
    <p>Podemos retornar o que desejarmos do hook como um valor único, um array, objeto etc. No exemplo vamos criar um hook que salva um dado no local storage vamos chama-lo de useLocalStorage veja mais no arquivo: &quot;src/hooks/CustomHooks/CustomHook.jsx&quot;.</p>
    <div className="exemple">
        <p>O nome do usuário é: {user}</p>
        <p>Usando o input abaixo vamos alterar o nome do usuário através de um customHook que faz um setItem no local storage</p>
        <input type="text"
        placeholder="Nome do usuário é:"
        onChange={(e) => {setUser(e.target.value)}} />
</div>
        </>
    )
}

export default CustomHook