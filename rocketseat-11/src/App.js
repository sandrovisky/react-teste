import Teste from './components/teste'
import React, { useState, useEffect } from 'react';
import './App.css'
import api from './services/api'

function App() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject (){
        
        //setProjects([...projects, `novo projeto ${Date.now()}`])

        const response = await api.post('projects', {
            title: `ovo ${Date.now()}`,
            owner: `com pelo`
        })

        const project  = response.data

        setProjects([...projects, project])
    }

  return (
    <>
        <Teste title = "ovo direito" />

        
        <ul>
            {projects.map((project,x) => <li key = {x}>{project.title}</li>)}
        </ul>

        <button type = "button" onClick = {handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
