import React from 'react'

export default ({ repo }) => (
    <li className="flex items-center mb-3">
        <div className="w-9/12 overflow-x-hidden">
            <h4 className="text-indigo-600 font-bold truncate">{repo.name}</h4>
            <p className="text-sm text-gray-800 overflow-y-hidden truncate" style={{ height: "1.5em" }}>
                {repo.description || 'description not available'}
            </p>
        </div>
        <div className="flex-1 text-right">
            <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
            >
                view
            </a>
        </div>
    </li>
)