import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style.css'

function Add() {

  const[book, setBook] = useState({
    tittle: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Add button clicked");
    console.log("Book data:", book);
    try {
      const response = await axios.post('http://localhost:8800/books', book);
      console.log("Response:", response);
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(book);
  return (
    <div className='form'>
      <h1>Add new book</h1>
      <input type="text" placeholder="Title" onChange={handleChange} name="tittle"/>
      <input type="text" placeholder="Description" onChange={handleChange} name="desc"/>
      <input type="number" placeholder="Price" onChange={handleChange} name="price"/>
      <input type='text' placeholder="Cover" onChange={handleChange} name="cover"/>
      <button className="formButton" onClick={handleClick} >Add book</button>
    </div>
  )
}

export default Add