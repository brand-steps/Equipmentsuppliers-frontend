import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './editproductuser.css'
import Sidebaruser from '../sidebarUser';

const Pizzaedit = () => {
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
        <Sidebaruser/>
        <div className='rootcontainer'>
        <h1 className='Heading'>EDIT PRODUCT</h1>
        <TextField fullWidth value={singleproduct.email} onChange={handlecchange} placeholder='Edit Email' name="email" variant="outlined" />
        <TextField fullWidth value={singleproduct.name} onChange={handlecchange} placeholder='Edit Product name' name="name" variant="outlined"  />
        <TextField fullWidth value={singleproduct.price} name="price" variant="outlined" placeholder='Edit Price' type='number' />
        
        <TextField fullWidth value={singleproduct.color} onChange={handlecchange} placeholder='Edit Product color' name="color" variant="outlined" />
        <TextField fullWidth value={singleproduct.material} onChange={handlecchange} placeholder='Edit Product material' name="material" variant="outlined" />
        <TextField fullWidth value={singleproduct.capacity} onChange={handlecchange} placeholder='Edit capacity' name="capacity" variant="outlined" />
        <TextField fullWidth value={singleproduct.lock} onChange={handlecchange} placeholder='Edit lock' name="lock" variant="outlined" />
        <TextField fullWidth value={singleproduct.shelves} onChange={handlecchange} placeholder='Edit Product shelves' name="shelves" variant="outlined" />
        <TextField fullWidth value={singleproduct.worksurface} onChange={handlecchange} placeholder='Edit work surface' name="worksurface" variant="outlined" />
        <TextField fullWidth value={singleproduct.tray} onChange={handlecchange} placeholder='Edit Product tray size' name="tray" variant="outlined" />
        <TextField fullWidth value={singleproduct.Width} onChange={handlecchange} placeholder='Edit Product Width' name="Width" variant="outlined" />
        <TextField fullWidth value={singleproduct.depth} onChange={handlecchange} placeholder='Edit Product depth' name="depth" variant="outlined" />
        <TextField fullWidth value={singleproduct.height} onChange={handlecchange} placeholder='Edit product height' name="height" variant="outlined" />
        <TextField fullWidth value={singleproduct.weight} onChange={handlecchange} placeholder='Edit product weight' name="weight" variant="outlined" />
        <TextField fullWidth value={singleproduct.gasconsumption} onChange={handlecchange} placeholder='Edit Product gas consumption' name="gasconsumption" variant="outlined" />
        <TextField fullWidth value={singleproduct.powerconsumption} onChange={handlecchange} placeholder='Edit Product power consumption' name="powerconsumption" variant="outlined" />
        <TextField fullWidth value={singleproduct.powersupply} onChange={handlecchange} placeholder='Edit Product power supply' name="powersupply" variant="outlined" />
        <TextField fullWidth value={singleproduct.power} onChange={handlecchange} placeholder='Edit product power' name="power" variant="outlined" />
        <TextField fullWidth value={singleproduct.controls} onChange={handlecchange} placeholder='Edit product controls' name="controls" variant="outlined" />
        <TextField fullWidth value={singleproduct.temperature} onChange={handlecchange} placeholder='Edit product temperature' name="temperature" variant="outlined" />
        <TextField fullWidth value={singleproduct.cooling} onChange={handlecchange} placeholder='Edit product cooling' name="cooling" variant="outlined" />
        <TextField fullWidth value={singleproduct.refrigerant} onChange={handlecchange} placeholder='Edit Product refrigerant' name="refrigerant" variant="outlined" />
        <TextField fullWidth value={singleproduct.defrost} onChange={handlecchange} placeholder='Edit Product defrost' name="defrost" variant="outlined" />
        <TextField fullWidth value={singleproduct.warranty} onChange={handlecchange} placeholder='Edit product warranty' name="warranty" variant="outlined" />
        <TextField fullWidth multiline maxRows={6} value={singleproduct.description} onChange={handlecchange} placeholder='Edit Product Description' name="description" variant="outlined" />

        <Button fullWidth onClick={handlesubmit} variant="contained">edit product</Button>

        
        </div>
        </>
    )
}

export default Pizzaedit;