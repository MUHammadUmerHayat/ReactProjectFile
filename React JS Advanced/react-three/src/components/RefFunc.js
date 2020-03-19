import React, { useRef } from 'react'

export default function RefFunc() {

    const reference = useRef(null)
    const focusInput = ()=>{
        reference.current.focus();
    }
    console.log(reference)
    return (
        <div>
            <input ref={reference}/>
            <button onClick={focusInput}>Click</button>
        </div>
    )
}
