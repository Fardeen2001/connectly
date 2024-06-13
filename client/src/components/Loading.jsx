import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <>
        <div  className='flex flex-col items-center justify-center w-screen h-screen'>
            <Triangle
                visible={true}
                height="100"
                width="100"
                color="#F45044"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

            <h1>Loading...</h1>

        </div>
        </>
    )
}

export default Loading