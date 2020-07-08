import React from 'react'
import { useHome } from '../context/homeContext'

export default () => {
    const home = useHome()

    return (
        <>
            {home.showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    //onClick={home.closeModal}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {home.Error
                                            ? 'error occurred'
                                            : 'Submitted successfully'
                                        }
                                    </h3>

                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={home.closeModal}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-600 text-lg leading-relaxed text-center">
                                        {home.Error
                                            ? 'an error has occurred, please try again later'
                                            : 'Message sent successfully'
                                        }
                                    </p>
                                    <div className="flex justify-center">
                                        {home.Error
                                            ? <i className="fas fa-times text-red-600 fa-5x"></i>
                                            : <i className="far fa-check-circle text-green-500 fa-5x"></i>
                                        }
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="btn"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={home.closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}