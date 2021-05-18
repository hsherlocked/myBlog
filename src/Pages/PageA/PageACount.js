import React from 'react'
import { useResetRecoilState, useRecoilValue } from 'recoil'
import {userListActionAtom, userListCountSelector} from '@/RecoilStore/pageStore'

export default function PageACount() {
    
    // 只读，数据来源于userListCountSelector
    // 在userListCountSelector中，通过get方法拦截了userListActionAtom数据
    const count = useRecoilValue(userListCountSelector)
    const onReset = useResetRecoilState(userListActionAtom)
    return (
        <>
            <div>
                当前共 <b>{count}</b> 条数据
            </div>
            <span onClick={onReset}>点击重置</span>
        </>
    )
}