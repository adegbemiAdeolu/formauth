import React from 'react'
import { Link } from '../components/form/FormElements'

export default function Home() {
    return (
        <div>
            <h1> I am Home</h1>
            <Link to="/signup">Sign Up Here</Link>
        </div>
    )
}
