import React from 'react'
import { useResetRecoilState, useRecoilValue } from 'recoil'
import {
    userListActionAtom,
    userListCountSelector,
} from '@/RecoilStore/pageStore'

export default function PageACount() {
    const count = useRecoilValue(userListCountSelector)
    const onReset = useResetRecoilState(userListActionAtom)
    return (
        <>
            <div>
                当前共 <b>{count}</b> 条数据
            </div>
            <span onClick={onReset}>点击重置数据</span>
        </>
    )
}
