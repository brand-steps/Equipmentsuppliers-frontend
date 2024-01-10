import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import Home from '../HOme/Home'

const Customerorder = () => {
    const {id} = useParams();
  const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productsBoolean, setProductsBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const [email, setEmail] = useState()
    const [responce  , setResponce] = useState("");

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '20px',
      marginTop: '15px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '80%', // Adjust the width as needed
      // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
    };
    const getAllProducts = async () => {
        try {
          const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/orderdisplay/${responce.email}`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all products", error);
          console.log(products);
        }
        console.log("emas", responce.email)
      };

      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`https://sore-cyan-fly-kit.cyclic.app/productreq/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in getting all products", error);
        }
        alert("Product Deleted");
        window.location.reload(false);
      }
    
      useEffect(() => {
        console.log('asdasd')
    }, [Delete , productsBoolean ])

        useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/api/v1/customerprofile`,
              {
                withCredentials: true,
                headers: {
                  'Cache-Control': 'no-cache',
                  'Pragma': 'no-cache',
                  'Expires': '0',
                }
              });
              console.log("response: ", response.data);
              setResponce(response.data)
          } catch (error) {
            console.log("axios error: ", error);
      
      
          }
      
        }
        getProfile();
      
      }, [])



  return (


    <div>
      <Home />
      <div className='justify-center flex mt-4'>
    
<TextField className='textfield '  value={responce.email} id="email" name="email" />
</div>
<div className='diving justify-center flex mt-4'>
        <Button  onClick={getAllProducts} variant="contained">Find your Orders</Button>

        </div>

      <div className='flex  justify-evenly flex-wrap my-4' >
      {products.map((value) => (
      <div style={containerStyle}>
        <div className='flex  justify-evenly flex-wrap font-normal my-4'>
        <h1 className=''> <span className='font-medium'> Address: </span><span> {value.address}</span></h1> 
        </div>
        <div>
          <hr/>
        <div className='flex  justify-evenly flex-wrap my-4'>
          
        <span className='my-2'> Card Holder: {value.username}</span> 
        <span className='my-2'>Shipment: {value.shipping}</span>
        <span className='my-2'>Total Amount: {value.total}.00 £</span> 
        </div>
        
        </div>
      </div>
      ))}
    </div>



{/*}
      <div className="flex flex-wrap justify-center">

    <div className="flex mt-4 justify-center  h-screen">
   

    <div  className='flex flex-col w-full'    >
    {products.map((value) => (
  <tr className="border-2  flex flex-wrap justify-between" key={value._id}>

    <th style={{ width: "100%" }} scope="row" className="px-6 py-4 font-normal text-black whitespace-nowrap">
        <span  > Address :</span> {value.address}
    </th>
    <td className="w-full md:w-auto px-6 py-4 text-black" >
        Card Holder :   {value.username}
    </td>
    
    <td className="w-full md:w-auto text-black px-6 py-4">
   <span  > Shipment :</span>   {value.shipping}
    </td>
    
    <div  className='flex justify-center' >
    <td    className="w-full md:w-auto px-6 py-4 cursor-pointer text-black text-center " >
      Total Amount : {value.total}.00 £
    </td>
    </div>
  </tr>
))}

</div>
   
  </div>


  </div>
  */}
    </div>
    
  )
}

export default Customerorder