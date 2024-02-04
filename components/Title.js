import React from 'react'

const Title = ({title}) => {
    return (
        <section>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-left sm:text-3x1 text-2x1 font-medium mb-2 text-gray-800'>{title}</h1>
            </div>
        </section>
    )
}