import React from 'react'
import style from './App.module.scss'
import PageA from '@/Pages/PageA/PageA';
import PageB from '@/Pages/PageB/PageB';

const { appcontainer } = style

function App() {
    const onClick = (name) => {
        console.log(name)
    }

    return (
        <div className={appcontainer}>
            <span>hello</span>
            <span
                onClick={() => onClick('snowpack')}
            >world</span>
            <PageA />
            <PageB />
        </div>
    )
}

export default App
