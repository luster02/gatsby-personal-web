import React, { useState, useEffect } from 'react'

const HomeContext = React.createContext()

export function HomeProvider(props) {
    const [showModal, setShowModal] = useState(false)
    const [Error, setError] = useState(null)

    useEffect(() => {
        (() => {
            setError(null)
        })()
    }, [])

    function closeModal() {
        setShowModal(false)
    }

    function openModal() {
        setShowModal(true)
    }

    function setErrorAction(error) {
        setError(error)
    }

    const value = {
        showModal,
        closeModal,
        openModal,
        Error,
        setErrorAction,
    }

    return <HomeContext.Provider value={value} {...props} />
}

export function useHome() {
    const context = React.useContext(HomeContext)
    if (!context) {
        return new Error('useHome is out provider')
    }
    return context
}