
import './App.css'
import UseContext from './hooks/UseContext/UseContext'
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
    <UseContext />
    </>
  )
}

export default App
