import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './editproductuser.css'
import Sidebaruser from '../sidebarUser';

const Utensilsedit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState("");
    const [descryption, setDescryption] = useState("");
    const [image, setImage] = useState("");


    const fetchSingleProduct = async() => {
        const response = await axios.get(`http://localhost:8000/singleproduct/${id}`);
        console.log("response: ", response);
      console.log(singleproduct);
      setsingleproduct(response.data.Product);
            }

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        setsingleproduct(()=> {
            return {
                ...singleproduct, [name]: value
            }
        })

    };
    
    const handleUpload = async(ev) => {
        const file = ev.target.files(0)
        const formData = new FormData();
        formData.append("image",file);
        const response = await fetch("http://localhost:3000/upload", {
        method: "POST",    
        body: formData,
        });

    }

    const handlesubmit = async () => {
        const productData = { ...singleproduct};
        const response = await axios.put(`http://localhost:8000/editsProducts/${id}`, productData);

alert("Product Updated");

    }

    useEffect (()=> {
        fetchSingleProduct()

    },[]);
    return (
        <>
        <Sidebaruser/>
        <div className='rootcontainer'>
        <h1 className='Heading'>EDIT PRODUCT</h1>
        <TextField fullWidth value={singleproduct.email} onChange={handlecchange} placeholder='Edit Email' name="email" variant="outlined" />
        <TextField fullWidth value={singleproduct.name} onChange={handlecchange} placeholder='Edit Product name' name="name" variant="outlined"  />
        <TextField fullWidth value={singleproduct.price} name="price" variant="outlined" placeholder='Edit Price' type='number' />
        
        <TextField fullWidth value={singleproduct.color} onChange={handlecchange} placeholder='Edit Product color' name="color" variant="outlined" />
        <TextField fullWidth value={singleproduct.pieces} onChange={handlecchange} placeholder='Edit product pieces' name="pieces" variant="outlined" />
        <TextField fullWidth value={singleproduct.material} onChange={handlecchange} placeholder='Edit Product material' name="material" variant="outlined" />
        <TextField fullWidth value={singleproduct.capacity} onChange={handlecchange} placeholder='Edit capacity' name="capacity" variant="outlined" />
        <TextField fullWidth value={singleproduct.tap} onChange={handlecchange} placeholder='Edit Product tap' name="tap" variant="outlined" />
        <TextField fullWidth value={singleproduct.Width} onChange={handlecchange} placeholder='Edit Product Width' name="Width" variant="outlined" />
        <TextField fullWidth value={singleproduct.depth} onChange={handlecchange} placeholder='Edit Product depth' name="depth" variant="outlined" />
        <TextField fullWidth value={singleproduct.height} onChange={handlecchange} placeholder='Edit product height' name="height" variant="outlined" />
        <TextField fullWidth value={singleproduct.length} onChange={handlecchange} placeholder='Edit product length' name="length" variant="outlined" />
        <TextField fullWidth value={singleproduct.diameter} onChange={handlecchange} placeholder='Edit Product diameter' name="diameter" variant="outlined" />
        <TextField fullWidth value={singleproduct.warranty} onChange={handlecchange} placeholder='Edit product warranty' name="warranty" variant="outlined" />
        <TextField fullWidth multiline maxRows={6} value={singleproduct.description} onChange={handlecchange} placeholder='Edit Product Description' name="description" variant="outlined" />

        <Button fullWidth onClick={handlesubmit} variant="contained">edit product</Button>

        </div>
        </>
    )
}

export default Utensilsedit;