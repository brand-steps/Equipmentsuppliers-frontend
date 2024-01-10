import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Allproduct.css'
import Sidebaruser from './sidebarUser'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Allproduct = () => {
  const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productsBoolean, setProductsBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const [email, setEmail] = useState()
    const [responce  , setResponce] = useState("")
    const getAllProducts = async () => {
        try {
          const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/productsdisplay/${responce.email}`);
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
       // getAllProducts()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean ])

        useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/api/v1/profile`,
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
      <Sidebaruser />

<div className='justify-center flex mt-4'>
<TextField className='textfield '  value={responce.email} id="email" name="email" />
</div>
<div className='diving justify-center flex mt-4'>
        <Button  onClick={getAllProducts} variant="contained">Find your Products</Button>

        </div>
      <div className="flex flex-wrap justify-center">

    <div className="flex mt-4 justify-center  h-screen w-3/4">
   

    <div  className='flex flex-col w-full'    >
    {products.map((value) => (
  <tr className="border-b bg-gray-700 dark:bg-gray-800 dark:border-gray-700 flex flex-wrap justify-between" key={value._id}>

    <th style={{ width: "100%" }} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <span   className='text-red-500'  >Name :</span> {value.name}
    </th>
    {value.category === "Refrigeration" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/refrigeratoredit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Diswashing" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/dishwashingedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Appliances" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/applianceedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Stainless Steel" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/steeledit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Cooking" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/cookingedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Food prep" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/foodprepedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                    {value.category === "Beverage Equipment" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/beverageedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                    {value.category === "Pizzeria & Grill" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/pizzaedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                    {value.category === "Oven & Steamers" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/oveneditedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                 {value.category === "Utensils" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/utensilsedit/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
    
    <td className="w-full md:w-auto px-6 py-4 text-red-500" >
        Price :   ${value.price}
    </td>
    
    <td className="w-full text-white md:w-auto px-6 py-4">
   <span  className='text-red-500'  > Category :</span>   {value.category}
    </td>
    
    <div  className='flex justify-center' >
    <td    className="w-full md:w-auto px-6 py-4 cursor-pointer text-red-500 text-center " onClick={() => { deleteData(value._id) }}>
      Delete
    </td>

    </div>
  </tr>
))}

</div>
   
  </div>


  </div>
    </div>
    
  )
}

export default Allproduct