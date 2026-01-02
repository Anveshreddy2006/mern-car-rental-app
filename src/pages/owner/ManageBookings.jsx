import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData } from '../../assets/assets'

const ManageBookings = () => {

    const [bookings, setBookings] = useState([])

    const fetchOwnerBookings = async () => {
        setBookings(dummyMyBookingsData)
    }

    useEffect(() => {
        fetchOwnerBookings()
    }, [])

    return (
        <div>
            Manage Bookings
        </div>
    )
}

export default ManageBookings

