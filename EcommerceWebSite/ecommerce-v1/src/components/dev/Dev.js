import React, { useState } from 'react';
import api from '../../api/axiosConfig';


function Dev ({apparel, getApparel}) {
  const [isReady, setIsReady] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    category: ''
  });

  function handleInputChange(event) {
    // check if all required fields have a value
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const category = document.getElementById('category').value;
    if (name && description && price && imageUrl && category) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
    
  }


  const postApparel = async (jsonFormData) =>{
    try{
      const response = await api.post("api/apparel", jsonFormData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      await getApparel();
    }
    catch(err){
      console.log(err);
    }
  }



  function handleSubmit(event) {
    event.preventDefault();
    const jsonFormData = JSON.stringify(formData);

    postApparel(jsonFormData);
    
    setFormData({
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      category: ''
    });
    setIsReady(false);
    // handle form submission
  }


  return (
    <div className='add-apparel-form'>
      <div className='container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <label form="name">Name</label>
          <input type='text' placeholder="Name" id='name' name='name' value={formData.name} onChange={handleInputChange} />
          <label form="description">Description</label>
          <input type='text' placeholder="Description" id='description' name='description' value={formData.description} onChange={handleInputChange} />
          <label form="price">Price</label>
          <input type='number' placeholder="Price" step='0.01' min='0' id='price' name='price' value={formData.price} onChange={handleInputChange} />
          <label form="imageUrl">ImageUrl</label>
          <input type='text' placeholder="ImageUrl" id='imageUrl' name='imageUrl' value={formData.imageUrl} onChange={handleInputChange} />
          <label form="category">Category</label>
          <input type='text' placeholder="Category" id='category' name='category' value={formData.category} onChange={handleInputChange} />
          <button type='submit' disabled={!isReady}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Dev