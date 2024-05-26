import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import './ProductDetails.css';
import Sidebar from "../../../../components/Sidebar";
 //import {initialdata} from '../../Data/pro'
const ProductDetails = () => {
  const [mongoData, setMongoData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/api/products/getProduct").then(
      res => {
        console.log(res.data)
        setMongoData(res.data)
      }
    ).catch((e) => {
      console.log(e)
    })
  }, [])

  const [editItemId , setEditItemId] = useState(null);
  const [editField, setEditField] = useState( null);
  const [editValue, setEditValue] = useState(null);

  console.log(mongoData)


  const handleEditClick = (itemId, field) => {
    setEditItemId(itemId);
    setEditField(field);
    const selectedItem = mongoData.find(item => item._id == itemId);
    if (selectedItem) {
      setEditValue(selectedItem[field].toString());
    }
  };


  const handleConfirmEdit = async () => { 
    const updatedPrice = editField == 'price' ? parseFloat(editValue) : parseInt(editValue);
    
    try {
     await axios.patch(`http://localhost:5000/api/products/Product/${editItemId}`, {
        field: editField, 
        value: updatedPrice, 
      });
      
      const updatedData = mongoData.map(item => item._id == editItemId ? { ...item, [editField]: updatedPrice } : item);
      setMongoData(updatedData);
  
      setEditItemId(null);
      setEditField(null);
      setEditValue(null);
    } catch (error) {
      console.error(error); 
    }
  };
  return (
    <div className="App">
    <div className='AppGlass'>
    <Sidebar sel="Products" ch="prouduct deatiels"/>
    <div className="con">
              <h1>Product Details</h1>

        <div className="dropy" >
      <table >
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>Product NAME</th>
            <th>PRICE (ILS)</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {mongoData.map((item) => (

            <tr key={item._id}>
             <td><img src={require(`../../../../proimage/${item.image}`)} alt="cake pic" width='50'height='50'  /></td>
             {console.log(item.image)}
              <td id="proname">{item.name}</td>
              <td>
                {editItemId == item._id && editField == 'price' ? (
                  <div>{/*maybe make it a component insted of this*/ }
                  <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                    <button id="confirmbutton" onClick={handleConfirmEdit}>Confirm</button>
                 </div>) 
                 : 
                 ( <button onClick={() => handleEditClick(item._id, 'price')}>  ILS     {item.price.toFixed(2)}</button>)}
              </td>
              <td>
                {editItemId == item._id && editField == 'quantity' ? (
                  <div className="confirmcontienar">
<input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                    <button  id="confirmbutton" onClick={handleConfirmEdit}>Confirm</button>
                  </div>
                ) : (
                  <button onClick={() => handleEditClick(item._id, 'quantity')}>{item.quantity}</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div></div></div>
  );
}

export default ProductDetails;
