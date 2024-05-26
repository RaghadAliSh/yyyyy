import React from 'react'
import './AddProduct.css'
import { useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useEffect } from 'react';
import Sidebar from '../../../../components/Sidebar';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [productData, setProductData] = useState({ name: '', price: '', category: '', description: '', image: null });

  const onInputChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name',data.name)
       formData.append('price', data.price)
      formData.append('category ',data.category)
       formData.append('description',data.description)
      formData.append('image', productData.image)

      const response = await axios.post('http://localhost:5000/api/products/addProduct', formData,)

     // console.log('Product created successfully:', response.data);
      alert('Product has been added!!!!!');

      setSubmitted(true);
      
      setProductData({ name: '', price: '', category: '', description: '', image: null })
    
    } catch (error) {

      console.error('error adding product:', error);
    }
  };

  useEffect(() => {
    if (submitted) {
      const clearfield = setTimeout(() => {
        setSubmitted(false);
      }, 2000 );

      return()=>clearTimeout(clearfield);
    }
  }, [submitted]);

  return (
    <>
      <div className="App">
    <div className='AppGlass'>
    <Sidebar sel="Products" ch="Add product"/>
  <div className='prodct'>
    <h1>Add Product</h1>
    
    <form id='form' onSubmit={handleSubmit(onSubmit)} >
    
    <div className='contienar'>
    <div className='child'>
    <label for="name">Product Name:</label>
      <input type="text" {...register('name', { required: true })} id="name" placeholder='cake..' value={productData.name} 
                onChange={(e) => setProductData({ ...productData, name: e.target.value })}/>
      </div>
  <div className='child'>
    
       <label for="price">Product Price:</label>
      <input type="number" {...register('price', { required: true, min: 0 })} id="price" placeholder='40.00'value={productData.price} 
                onChange={(e) => setProductData({ ...productData, price: e.target.value })} 
             />
      </div>
      <div className='child'>
      <label for="category">Product Category :</label>

<select name="category" id="category" {...register('category', { required: true})} value={productData.category} 
                onChange={(e) => setProductData({ ...productData, category: e.target.value })} >
<option value="Birthday">Birthday</option>
<option value="Wedding ">Wedding</option>
<option value="Graduation">Graduation</option>
<option value="Engagement">Engagement</option>
</select> 
      </div>

    </div>
    
    <div>
      <label for="description">Product Description:</label>
      <textarea id="description" placeholder='write description about product..... '{...register('description', { required: true })} value={productData.description} 
              onChange={(e) => setProductData({ ...productData,description :e.target.value })}/> 
    </div>
    <div>
<label for="image">Product Image URL:</label>
    
<div id='in'>
          <input type='file' id='image' accept='image/*' onChange={onInputChange} />
        </div>

      


    </div>
  <button type="submit" disabled={submitted}> {/*submitted ? 'sucsess'  : 'confirm' */}confirm
  
   </button>
  </form>


</div></div></div>
</>)



};

export default AddProduct;
