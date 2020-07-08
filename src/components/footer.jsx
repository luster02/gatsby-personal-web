import React from 'react'

export default () => (
    <footer className="bg-purple-800">
        <div className="container mx-auto p-12 max-w-6xl ">
            <div className="flex justify-between items-center w-8/12 m-auto">
                <a href="https://github.com/luster02" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x text-white hover:text-indigo-200"></i>
                </a>
                <a href="https://gitlab.com/jonathanBG" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-gitlab fa-2x text-white hover:text-indigo-200"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCLwqcyNJeh_Hfjz2Sny_nNw" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-2x text-white hover:text-indigo-200"></i>
                </a>
                <a href="https://www.linkedin.com/in/jonathan-baltazar-garcia-104456101/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x text-white hover:text-indigo-200"></i>
                </a>
                <a href="https://www.facebook.com/Cxyz-103483391137839" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square fa-2x text-white hover:text-indigo-200"></i>
                </a>
            </div>
            <div className="text-white text-center mt-5 md:mt-10 lg:mt-10 xl:mt-10">
                © 2020 Copyright: Jonathan Baltazar
            </div>
        </div>
    </footer>
)