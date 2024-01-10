import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './bestseller.css';
import AdminBar from '../../HOme/AdminBar';


export const BestSellers = () => {
    const navigate = useNavigate();
    
    const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);
  const [approve, setapprove] = useState(false);



  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/bestsellerdisplay`);
      console.log("response: ", response);
      console.log(products);
      setProducts(response.data.data);
    } catch (error) {
      console.log("error in getting all best seller products", error);
    }
  };

  const NotBestseller = async (id)=>{
    try {
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/bestsellerdisapprove/${id}`)
      console.log("response: ", response.data);
    } catch (error) {
      console.log("error in approving all requests", error);
    }
    alert("Product removed from best sellers");
    window.location.reload(false);
  };
  const approveBestSeller = async (id)=>{
    try {
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/bestsellerapprove/${id}`)
      console.log("response: ", response.data);
    } catch (error) {
      console.log("error in approving all requests", error);
    }
    alert("Product approved");
    window.location.reload(false);
  };

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
    // return () => {
    //   console.log('Cleanup Function');
    //  }
}, [Delete , productsBoolean ])

  return (
    <div>
      <AdminBar/>
        <h1 className='dasfasfkasfhoiasbfbfa'  >Best Seller Approval </h1>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product image
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Product  Price
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Product Category
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Set Best Seller
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Disapproves
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                
                <th scope="col" class="px-6 py-3">
                    {/* <div class="flex items-center">
                        Price
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div> */}
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>



            {products.map((value)=>(
                <>
            <tr class=" border-b    bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={value.imageUrl} className='imagedis' alt='img'/>
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value.name}
                </th>
                <td class="px-6 py-4">
                ${value.price}
                </td>
                <td class="px-6 py-4">
                   {value.category}
                </td>

                <td    className='lllololo'   onClick={()=>{approveBestSeller(value._id)}}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Set Best Seller
                </td>
                <td    className='lllololo'   onClick={()=>{
                    NotBestseller(value._id)
                }}  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Remove
                </td>
                <td class="px-6 py-4 text-right">
                    {/* <BasicModal   Image = {value.imageUrl}    id={value._id}    /> */}
                </td>
                {value.category === "Refrigeration" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editrefrigerator/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Diswashing" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editdishwashing/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Appliances" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editappliance/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Stainless Steel" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Stainlesssteels/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Cooking" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editcooking/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                {value.category === "Food prep" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/EditFoodprep/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                    {value.category === "Beverage Equipment" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editbeverage/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                    {value.category === "Pizzeria & Grill" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editpizza/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                    {value.category === "Oven & Steamers" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editoven/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
                 {value.category === "Utensils" && (
                    <>
                    <td    className='lllololo'   onClick={()=>{navigate(`/Editutensils/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td> 
                    </>
                )}
            </tr>
           </>
            ))}
   
        </tbody>
    </table>
</div>


    </div>

  )
}
export default BestSellers;