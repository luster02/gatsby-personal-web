import React, { useState, useEffect } from 'react'
import Repo from './repo'
import { repoData } from '../lib/reposData'

export default () => {
    const [repos, setRepos] = useState([])
    useEffect(() => {
        (async () => {
            const ResRepos = await repoData()
            setRepos(ResRepos)
        })()
    }, [])

    return (
        <div className="max-w-4xl mx-auto my-10">
            <header className="text-center mx-8">
                <h2 className="text-3xl font-bold">My github repositories</h2>
                <p className="font-light my-2">All github repositories, snippets, examples, finished and unfinished</p>
            </header>
            <ul className="repos-list">
                {repos.map((repo, index) => {
                    return <Repo repo={repo} key={index} />
                })}
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/luster02" className="btn" target="_blank" rel="noopener noreferrer">
                    view all
                </a>
            </div>
        </div>
    )
}