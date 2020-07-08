import React, { useState, useRef } from 'react'
import { useHome } from '../context/homeContext'
import { saveOnFB } from '../lib/messageFirebase'

export default () => {
    const home = useHome()
    const [Message, setMessage] = useState('')
    const textAreaRef = useRef()

    function handleChange(e) {
        setMessage(e.target.value)
    }

    async function send() {
        if (Message === '') {
            return
        } else {
            const res = await saveOnFB(Message)
            if (res) {
                home.openModal()
                textAreaRef.current.value = ''
                setMessage('')
            } else {
                home.setErrorAction(true)
                home.openModal()
                textAreaRef.current.value = ''
                setMessage('')
            }
        }
    }

    return (
        <div className="mt-8 md:mt-16 lg:mt-16 xl:mt-16  text-center">
            <p
                className="block text-gray-700 text-sm font-bold mb-2"
            >
                develop something together
            </p>
            <div className="flex shadow rounded bg-white border p-2">
                <textarea
                    name="area-contact"
                    id="area-contact"
                    ref={textAreaRef}
                    onChange={e => handleChange(e)}
                    className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                ></textarea>
                <button onClick={send} className="btn ml-2">send</button>
            </div>
        </div>
    )
}