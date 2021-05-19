import React from 'react'
import { Button } from 'antd'

export default function TestComponent({ testName }) {
    return (
        <>
            <Button size="small">点击</Button>
            <div>hello, {testName}!</div>
        </>
    )
}
