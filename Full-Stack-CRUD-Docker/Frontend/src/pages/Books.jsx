import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../style.css'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try{
        const res = await axios.get('http://localhost:8800/books')
        setBooks(res.data);
      }catch(error){
        console.error(error)
      }
    }
    fetchAllBooks()
  },[])

  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title} />}
            <h2>{book.tittle}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button className="btn btn-custom-teal fw-bold mt-3"><Link to="/add">Add new book</Link></button>
    </div>
  )
}

export default Books