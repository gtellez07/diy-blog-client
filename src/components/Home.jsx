import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/blogs')
                console.log(response.data)
                setBlogs(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getBlogs()
    })
}