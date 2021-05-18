import React from 'react';
import {Button} from 'antd';

export default function TestComponent({testName}) {
    return (
        <>
            <Button
                onClick={() => console.log(123)}
                size="small"
            >
                点击
            </Button>
            <div>hello, {testName}!</div>
        </>
    )
}