import React, { useState } from 'react'
import style from './App.module.scss'
import PageA from '@/Pages/PageA/PageA'
import PageB from '@/Pages/PageB/PageB'
import axios from 'axios'

const { appcontainer } = style

function App() {
    const [name, setName] = useState('default word')

    const onClick = async () => {
        const res = await axios.get('/api/demo')
        const { data, status } = res
        if (status === 200) {
            setName(data)
        }
    }

    return (
        <div className={appcontainer}>
            <span>{name}</span>
            <button onClick={onClick}>click me</button>
            <PageA />
            <PageB />
        </div>
    )
}

export default App
