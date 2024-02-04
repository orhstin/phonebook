import React from 'react'
import ContactForm from '@/components/ContactForm'

const NewContact = () => {
    return(
        <div className='flex items-center justify-center h-screen bg-white'>
            <div class="bg-white p-10 h-3/5 rounded-lg flex flex-col ring-2 ring-gray-200 sm:mt-200 shadow-lg">
                <ContactForm/>
            </div>
    </div>
    )
}

export default NewContact