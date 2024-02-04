'use client'
import { getContacts } from '@/lib/data'
import React from 'react'
import Link from "next/link"
import {useState, useEffect} from "react"

const List = () => {
    const [contacts, setContacts] = useState([])

    const [newContacts, setNewContacts] = useState([])
    const handleChange = (e) => {
        const {name, value} = e.target
        const updatedContacts = contacts.filter(x => x.firstName.toLowerCase().includes(value.toLowerCase()))
        setNewContacts(updatedContacts)
    }

    const getAllContacts = async () => {
        const contacts = await getContacts()
        setNewContacts(contacts)
        setContacts(contacts)
    };

    useEffect(() => {
        getAllContacts()
    }, [])

    return (
        <div id="infinite-scroll-list" className="h-full overflow-y-auto">
        <input type="text" onChange={handleChange} placeholder="Search" class="w-full px-4 py-2 mb-4 bg-white-700 border-2 border-gray-100 shadow-md text-gray rounded focus:outline-none focus:ring focus:border-blue-300"></input>
        {newContacts.map((contact, index) => (
            <div key={index} className="mb-2">
            <Link href={`contact/${contact._id}`}>
                {`${contact.firstName} ${contact.lastName}`}
            </Link>
            </div>
        ))}
        </div>
    )
  }

  export default List