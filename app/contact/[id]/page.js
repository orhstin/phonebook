'use client'

import { getContactByID } from '@/lib/data'
import React from 'react'
import { updateContact } from '@/lib/api'
import { useState, useEffect } from 'react'
import Link from "next/link"
import { deleteContact } from '@/lib/api'

const ContactByID = ({params}) => {
    const {id} = params
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleDelete = () => {
        deleteContact(params)
    }
    useEffect(() => {
        const getContact = async() => {
            const contactByID = await getContactByID(id)
            setFormValues(contactByID)
        };

        getContact();
    }, [id]);


    return(
        <div className='flex items-center justify-center h-screen bg-white'>
            <div className="bg-white p-10 h-3/5 rounded-lg flex flex-col ring-2 ring-gray-200 sm:mt-200 shadow-lg">
                <div class="flex items-center justify-between mb-2">
                    <Link href="/" class="px-4 py-2 bg-blue-500 text-white rounded">Cancel</Link>
                    <button form="contact-form" type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Done</button>
                </div>
                <form className="space-y-6 mt-2" 
                action={updateContact}>
                    <div>
                        <input type='text' name='id' hidden value={id} />
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full bg-gray-100 text-black rounded border-2 border-gray-500 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full bg-gray-100 text-black rounded border-2 border-gray-500 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-400">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full bg-gray-100 text-black rounded border-2 border-gray-500 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full bg-gray-100 text-black rounded border-2 border-gray-500 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <button onClick={handleDelete} class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                </form>
            </div>
        </div>
    )
}

export default ContactByID

