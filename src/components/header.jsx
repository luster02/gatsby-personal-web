import React, { useState } from 'react'
import Texty from 'rc-texty'
import IMG1 from '../assets/img/undraw_accept_tasks_po1c.svg'
import Contact from './contact'

export default () => {
    const [Text2, setText2] = useState(false)
    const [Text3, setText3] = useState(false)

    setTimeout(() => {
        setText2(true)
    }, 1500)

    setTimeout(() => {
        setText3(true)
    }, 6000)

    return (
        <header className="bg-gray-300">
            <div className="container mx-auto p-12 max-w-6xl ">
                <div className="flex-row sm:flex-row md:flex lg:flex justify-center items-center">
                    <div className="flex-1 text-center">
                        <div className="font-bold text-purple-600 text-6xl mb-3">
                            <Texty type="mask-top" mode="random">
                                Hi! I'm Jonathan
                            </Texty>
                        </div>
                        <Texty mode="reverse" type="right" className="font-light my-3">
                            {Text2 &&
                                'Web development in Javascript enviroment, React, Angular, NodeJS, Redux, MongoDB.'
                            }
                        </Texty>
                        <Texty className="font-light my-3">
                            {Text3 &&
                                'Mobile develpment, tutorials, downloads and more.'
                            }
                        </Texty>
                    </div>
                    <img
                        src={IMG1}
                        alt="illustration"
                        className="ml-3 sm:m-auto"
                        style={{ height: "280px" }}
                    />
                </div>
                <div className="flex-1 w-full md:w-9/12 sm:w-9/12 lg:w-9/12 xl:w-9/12 mx-auto">
                    <Contact />
                </div>
            </div>
        </header>
    )
}