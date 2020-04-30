import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h1 className="center">About page</h1>
            <h4>This page is switching text color every time it's refreshed. Because I thought it would look cool....somehow</h4>
            <p> Excepteur in reprehenderit consectetur reprehenderit commodo nisi ad commodo. Nisi dolor quis commodo irure eiusmod nisi nostrud veniam adipisicing ex ipsum eu ad ut. Occaecat et pariatur ullamco dolore reprehenderit. Ex id velit adipisicing excepteur non eiusmod aute cupidatat aliquip id tempor pariatur. Occaecat aliquip nulla duis ea ipsum voluptate elit ut et officia deserunt cupidatat aliqua.nostrud duis sit sunt sunt pariatur deserunt duis. Labore enim et excepteur magna est. Lorem consequat commodo eu pariatur reprehenderit sit cillum tempor aute commodo. </p>
        </div>
    )
}

export default Rainbow(About);