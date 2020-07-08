import React, { useEffect, useState } from 'react'
import CardComponent from '../components/CardComponent'
import { getProjects } from '../lib/firebaseProjects'

export default () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getProjects()
            setProjects(res)
        })()
    }, [])

    return (
        <div className="max-w-5xl mx-auto my-10">
            <header className="text-center mx-8">
                <h2 className="text-3xl font-bold">My personal Projects</h2>
                <p className="font-light my-2">My projects can be integrated into other repositories</p>
            </header>
            <div className="mx-3 flex justify-center">
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {projects.map((item, index) => (
                        <CardComponent project={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}