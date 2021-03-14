import { RepositoryItem } from './RepositoryItem'
import {useState, useEffect} from 'react'
import '../styles/repositories.scss'

export function RepositoryList() {
   
    const[repositories, setRepositories] = useState([]);
    
    useEffect(()=>{
        fetch('https://api.github.com/users/CaioPawilak/repos')
        .then(response => response.json())
        .then(data =>setRepositories(data))
    },[]);

    return (

        <section className="respository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository=>{
                       return <RepositoryItem key=" "repository={repository}/>
                    }
                 )
                }            
            </ul>
        </section>

    )

}