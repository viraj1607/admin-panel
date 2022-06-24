import React from 'react'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import PublishIcon from '@mui/icons-material/Publish';
import './product.scss'
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className='product'>
        <div className="product-header">
            <h3>Product</h3>
            <Link to='/newproduct'><button className="create-product">Create</button></Link>
        </div>
        <div className="product-container-top">
            <div className="container-left">
                <Chart data={productData} dataKey="sales" title="Sales Performance" />
            </div>
            <div className="container-right">
                <div className="info-head">
                    <img src="https://cdn.mos.cms.futurecdn.net/yEkWrxSqnXNdDateMZCyXB.jpg" alt="" />
                    <span>Smartphone</span>
                </div>
                <div className="info-body">
                    <div className='info'>
                        <span><b>ID:</b></span>
                        <span>123</span>
                    </div>
                    <div className='info'>
                        <span><b>Active:</b></span>
                        <span>Yes</span>
                    </div>
                    <div className='info'>
                        <span><b>Sales:</b></span>
                        <span>1232</span>
                    </div>
                    <div className='info'>
                        <span><b>In Stock:</b></span>
                        <span>No</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-container-bottom">
            <div className="bottom-left">
                <div className="product-info">
                    <label>
                        Product Name
                        <input type="text" placeholder='Smartphone' />
                    </label>
                </div>
                <div className="product-info">
                    <label>
                        In Stock
                        <select name="stock" id="stock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div className="product-info">
                    <label>
                        Active
                        <select name="stock" id="stock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="bottom-right">
                <div className='img-content'>
                <img className='upload-product-img' src="https://cdn.mos.cms.futurecdn.net/yEkWrxSqnXNdDateMZCyXB.jpg" alt="" />
                <label htmlFor="productImg">
                    <PublishIcon style={{cursor:'pointer'}}/>
                </label>
                <input type="file" id="productImg" style={{display:"none"}}/>
                </div>
                <button className='update-btn'>Update</button>
            </div>
        </div>
    </div>
    
  )
}

export default Product