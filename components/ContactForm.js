'use client'

import Link from 'next/link';
import { useState } from 'react';
import { addContact } from '@/lib/api';

const ContactList = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
    });

    const handleSubmit = () => {
        setFormValues({
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div>
            <div class="flex items-center justify-between mb-2">
                <Link href="/" class="px-4 py-2 bg-blue-500 text-white rounded">Cancel</Link>
                <button form="contact-form" type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Done</button>
            </div>
            <form id="contact-form" className="space-y-6 mt-10 "
            action={addContact}
            onSubmit={handleSubmit}>
                <div>
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
            </form>
        </div>
    );
};

export default ContactList;
