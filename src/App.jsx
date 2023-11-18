
import './App.css'
import MyProvider from './context/Provider'
import CustomHook from './hooks/CustomHooks/CustomHook'
import UseContext from './hooks/UseContext/UseContext'
import UseContext2 from './hooks/UseContext2/UseContext2'
import ExerciceUseEffect from './hooks/UseEffect/ExerciceUseEffect'
import UseEffect from './hooks/UseEffect/UseEffect'
import UseMemo from './hooks/UseMemo/UseMemo'
import UseRef from './hooks/UseRef/UseRef'
import ExerciceUseState from './hooks/UseStateHook/ExerciceUseState'
import UseStateHook from './hooks/UseStateHook/UseStateHook'

function App() {


  return (
    <>

    <UseStateHook />
    <ExerciceUseState />
    <hr/>
    <UseEffect />
    <ExerciceUseEffect />
    <hr/>
    <UseRef />
    <hr/>
    <UseMemo />
    <hr/>
    <MyProvider>
    <UseContext />
    <UseContext2/>
    </MyProvider>
    <hr/>
    <CustomHook />


    
    </>
  )
}

export default App
