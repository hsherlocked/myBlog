import React from 'react'
import PageACount from './PageACount'
import { Button } from 'antd'
import { userListSelector } from '@/RecoilStore/pageStore'
import { useRecoilState } from 'recoil'

const rnd = (min, max) => {
    return Math.floor((max - min) * Math.random() + min)
}

export default function PageA() {

    // 读写，调用setUserList时会触发userListSelector的set方法
    const [userList, setUserList] = useRecoilState(userListSelector)

    const onModifyItem = data => {
        setUserList({
            action: 'MOD',
            payload: { ...data, age: rnd(1, 99) },
        })
    }

    const onDeleteItem = data => {
        setUserList({
            action: 'DEL',
            payload: { id: data.id },
        })
    }

    return (
        <div>
            <h4>PageA</h4>
            <ul>
                {userList.map(item => (
                    <li key={item.id}>
                        <span>name: {item.name}</span>
                        &nbsp;&nbsp;
                        <span>age: {item.age}</span>
                        &nbsp;&nbsp;
                        <Button
                            size="small"
                            style={{ color: 'orange' }}
                            onClick={() => onModifyItem(item)}
                        >
                            随机生成age
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            size="small"
                            style={{ color: 'red' }}
                            onClick={() => onDeleteItem(item)}
                        >
                            删除
                        </Button>
                    </li>
                ))}
            </ul>
            <PageACount />
        </div>
    )
}
