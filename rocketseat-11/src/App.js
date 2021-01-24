import Teste from './services/teste'
import {useState} from 'react'
import './App.css'
import bg from './assets/background.jpg'

function App() {

    const [projects, setProjects] = useState(['pamonha', 'cheetos'])

    function handleAddProject (){
        
        setProjects([...projects, `novo projeto ${Date.now()}`])

        console.log(projects)
    }

  return (
    <>
        <Teste title = "ovo direito" />

        <img width = {300} src = {bg} alt = "background" />
        <ul>
            {projects.map((project,x) => <li key = {x}>{project}</li>)}
        </ul>

        <button type = "button" onClick = {handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
