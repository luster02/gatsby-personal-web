import React from 'react'
import ReactIconSVG from '../assets/img/undraw_react_y7wq.svg'

export default () => (
    <div className="py-10 px-5 bg-gray-200">
        <div className="max-w-4xl mx-auto">
            <header className="text-center">
                <h2 className="text-3xl font-bold">My youtube tutorials</h2>
                <p className="font-light my-2">Here you can find the last tutorial</p>
            </header>
            <div className="my-4">
                <img
                    src={ReactIconSVG}
                    style={{ height: '350px' }}
                    className="mx-auto my-3"
                    alt="react-tutorial"
                />
                <div className="text-center mt-2 ">
                    <h2 className="text-lg">React CRUD (useContext & useReducer) with mongoDB API</h2>
                    <p className="font-light mb-4">Learn Reactjs, Hooks, useState, useEffect  and way more!</p>
                    <div className="flex justify-between w-full  md:w-6/12 lg:w-6/12 xl:w-6/12 mx-auto">
                        <a
                            href="https://www.youtube.com/watch?v=zzOqMrSMpg0&t=11s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary mx-1"
                        >
                            view tutorial <i className="fas fa-play"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCLwqcyNJeh_Hfjz2Sny_nNw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn mx-1"
                        >
                            visit youtube channel <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)