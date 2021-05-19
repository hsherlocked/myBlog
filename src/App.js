import React, { useState } from 'react'
import style from './App.module.scss'
import PageA from '@/Pages/PageA/PageA'
import PageB from '@/Pages/PageB/PageB'

const { appcontainer } = style

function App() {
    const [name, setName] = useState('')

    const onClick = name => {
        setName(name)
    }

    return (
        <div className={appcontainer}>
            <span>hello</span>
            <span onClick={() => onClick('snowpack')}>{name}</span>
            <PageA />
            <PageB />
        </div>
    )
}

export default App
