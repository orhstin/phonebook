import { getContacts } from '@/lib/data'
import React from 'react'
import Link from "next/link"

const List = async () => {
    const contacts = await getContacts()
    return (
        <div id="infinite-scroll-list" className="h-full overflow-y-auto">
        <input type="text" placeholder="Search" class="w-full px-4 py-2 mb-4 bg-white-700 border-2 border-gray-100 shadow-md text-gray rounded focus:outline-none focus:ring focus:border-blue-300"></input>
        {/* Display contacts */}
        {contacts?.map((contact, index) => (
            <div key={index} className="mb-2">
            <Link href={`contact/${contact.id}`}>
                {`${contact.firstName} ${contact.lastName}`}
            </Link>
            </div>
        ))}
        </div>
    )
  }

  export default List