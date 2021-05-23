import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { userListSelector } from '@/RecoilStore/pageStore'
import { useSetRecoilState } from 'recoil'

export default function PageB() {
    const setList = useSetRecoilState(userListSelector)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const addItem = (name, age) => {
        setList({
            action: 'ADD',
            payload: { id: Math.random(), name, age },
        })
    }

    return (
        <div>
            PageB
            <div>
                add name:
                <Input value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                add age:
                <Input value={age} onChange={e => setAge(e.target.value)} />
            </div>
            <Button onClick={() => addItem(name, age)}>add one</Button>
        </div>
    )
}
