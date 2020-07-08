import React from 'react'

export default ({ project = {} }) => {

    function conditionalIcon() {
        switch (project.data.tech) {
            case 'node':
                return <i className="fab fa-node-js fa-2x"></i>
            case 'react':
                return <i className="fab fa-react fa-2x"></i>
            case 'android':
                return <i className="fab fa-android fa-2x"></i>
            default:
                return <i className="fas fa-question fa-2x"></i>
        }
    }

    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-2xl rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16 ">
                <span className="p-3 border rounded-full shadow-md border-gray-700">
                    {conditionalIcon()}
                </span>
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{project.data.title}</h2>
                <div className="flex space-x-1">
                    <span className="badge">
                        {project.data.status}
                    </span>
                    <span className={project.data.maintenance === 'discontinued' ? "badge-danger" : "badge-success"}>
                        {project.data.maintenance}
                    </span>
                </div>
                <div className="my-2">
                    {project.data.featured &&
                        <span className="badge-gold">
                            featured <i className="fas fa-star ml-2"></i>
                        </span>
                    }
                </div>
                <p className=" mt-2 text-gray-600">
                    {project.data.description}
                </p>
            </div>
            <div className="flex justify-end  bottom-auto mt-4">
                <a
                    href={project.data.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-indigo-500"
                >
                    view on github
                </a>
            </div>
        </div>
    )
}