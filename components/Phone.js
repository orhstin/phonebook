import React from 'react'
import Link from "next/link"
import List from "@/components/List"
const Phone = () => {
    return (
    <div class="bg-white p-8 h-3/5 rounded-lg flex flex-col ring-2 ring-gray-200 sm:mt-200 shadow-lg">
        <div class="flex items-center justify-between mb-2">
            <h3 class="text-2xl font-bold tracking-tight text-gray-900">Contacts</h3>
            <Link href="/addContact" class="px-4 py-2 bg-blue-500 text-white rounded">Add</Link>
        </div>
        <List/>

    </div>
    )
}

export default Phone