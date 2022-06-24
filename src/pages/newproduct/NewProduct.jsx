import React from 'react'
import './newproduct.scss'

function NewProduct() {
  return (
    <div className='newproduct'>
        <div className='header'>New Product</div>
        <div className="newproduct-container">
            <div className="newproduct-info">
                <label>
                    Image
                </label>
                <input style={{margin:"10px 0"}} type="file" />
                
            </div>
            <div className="newproduct-info">
                <label>
                    Name
                </label>
                <input placeholder='Enter Name' className='newproduct-input' type="text" />
                
            </div>
            <div className="newproduct-info">
                <label>
                    Stock
                </label>
                <select className='newproduct-input' name="newProductStock" id="newProductStock">
                    <option value="yes">Yes</option>
                    
                <option value="no">No</option>
                </select>
                
            </div>
            <div className="newproduct-info">
                <label>
                    Active
                </label>
                    <select className='newproduct-input' name="newProductActive" id="newProductActive">
                        <option value="yes">Yes</option>
                        
                    <option value="no">No</option>
                    </select>
                
            </div>
            <button className='add-btn'>Add</button>
        </div>
    </div>
  )
}

export default NewProduct