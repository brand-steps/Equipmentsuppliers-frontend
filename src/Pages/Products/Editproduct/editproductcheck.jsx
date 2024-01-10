import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './editproduct.css'
import AdminBar from '../../HOme/AdminBar';

const EdittProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState("");
    const [descryption, setDescryption] = useState("");
    const [image, setImage] = useState("");


    const fetchSingleProduct = async() => {
        const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/singleproduct/${id}`);
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
        const response = await axios.put(`https://sore-cyan-fly-kit.cyclic.app/editsProducts/${id}`, productData);

alert("Product Updated");
    }
    

    useEffect (()=> {
        fetchSingleProduct()

    },[]);

    return (
        <>
        <AdminBar/>
    <div className='rootcontainer'>
        <h1 className='Heading'>EDIT PRODUCT</h1>
        <TextField fullWidth value={singleproduct.email} onChange={handlecchange} name="email" variant="outlined" />
        <TextField fullWidth value={singleproduct.name} onChange={handlecchange} name="name" variant="outlined"  />
        <TextField fullWidth value={singleproduct.price} onChange={handlecchange} name="price" variant="outlined"  type='number' />
        <TextField fullWidth value={singleproduct.category} onChange={handlecchange} name="category" variant="outlined" />
        <TextField fullWidth value={singleproduct.description} onChange={handlecchange} name="description" variant="outlined" />

        <Button fullWidth onClick={handlesubmit} variant="contained">edit product</Button>

        
        </div>
        </>
    )
}

export default EdittProduct;