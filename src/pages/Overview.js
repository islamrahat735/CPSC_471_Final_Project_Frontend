import React from 'react'
import { useSelector } from 'react-redux'

export default function Overview() {
    const username = useSelector((state) => state.username);
    return (
        <div >
            Overview!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            <div>
                Hello! {username}
            </div>
        </div>
    )
}
