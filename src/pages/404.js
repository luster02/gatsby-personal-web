import React from 'react'
import { Link } from 'gatsby'
import IMG2 from '../assets/img/undraw_empty_xct9.svg'

export default () => (
    <div className="flex max-h-screen h-screen w-screen max-w-full bg-gray-300">
        <div className="container m-auto p-12 max-w-4xl">
            <div className="flex-row sm:flex-row md:flex lg:flex justify-center items-center">
                <div>
                    <h4 className="text-3xl text-purple-600">Resource not found</h4>
                    <p className="font-light">
                        the resource you are looking for is not available or has been removed
                    </p>
                </div>
                <img
                    src={IMG2}
                    alt="empty files"
                    style={{ height: 300 }}
                />
            </div>
            <div className="mt-16 md:mt-0 lg:mt-0 xl:mt-0 w-4/12">
                <Link to="/" replace className="btn">
                    Go home
                </Link>
            </div>
        </div>
    </div>
)