'use server'

import Contact from "@/models/Contact"
import db from "./db"
import {redirect} from "next/navigation"


export const addContact = async(FormData) => {
    const {firstName, lastName, address, phone} = 
    Object.fromEntries(FormData)
    try {
        console.log("called")
        db.connect()
        const newContact = new Contact({
            firstName, lastName, address, phone
        })
        await newContact.save()
    } catch (error) {
        throw new Error ("create contact failed" + error)
    }
    redirect("/")
}

export const updateContact = async (FormData) => {
    const {id, firstName, lastName, address, phone} = 
    Object.fromEntries(FormData)
    try {
        db.connect()
        const updateFields = {
            firstName, lastName, address, phone
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key] )
        await Contact.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("update contact failed" + error)
    }
    redirect("/")
}

export const deleteContact = async (params) => {
    const {id} = params
    try {
        db.connect()
        await Contact.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed To Delete Contact " + error)
        
    }
    redirect("/")

}