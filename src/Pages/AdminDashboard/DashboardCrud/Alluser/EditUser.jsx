import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './selectprouser.css'
import AdminBar from '../../../HOme/AdminBar';

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);



    const fetchSingleProduct = async() => {
        const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/edituser/${id}`);
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
    

    const handlesubmit = async () => {
        const UserData = { ...singleproduct};
        const response = await axios.put(`https://sore-cyan-fly-kit.cyclic.app/edittedUsers/${id}`, UserData);
        alert("User Updated");
        navigate("/AllUser");
    }
    
    useEffect (()=> {
        fetchSingleProduct()

    },[]);

    return (
        <>
        <AdminBar/>
    <div className='rootcontainer'>
        <h1 className='Heading'>EDIT USER</h1>
        <TextField fullWidth value={singleproduct.firstname} onChange={handlecchange} name="firstname" variant="outlined"  />
        <TextField fullWidth value={singleproduct.lastname} onChange={handlecchange} name="lastname" variant="outlined"  />
        <TextField fullWidth value={singleproduct.email} onChange={handlecchange} name="email" variant="outlined" />
        <TextField fullWidth value={singleproduct.phone} onChange={handlecchange} name="phone" type='number' variant="outlined" />
        <TextField fullWidth value={singleproduct.company} onChange={handlecchange} name="company" variant="outlined" />
        <TextField fullWidth value={singleproduct.postal} onChange={handlecchange} name="postal" type='number' variant="outlined" />
        <TextField fullWidth value={singleproduct.vat} onChange={handlecchange} name="vat" type='number' variant="outlined" />
        <TextField fullWidth value={singleproduct.companyaddress} onChange={handlecchange} name="companyaddress" variant="outlined" />
        <TextField fullWidth value={singleproduct.country} onChange={handlecchange} name="country" variant="outlined" />
        <TextField fullWidth value={singleproduct.city} onChange={handlecchange} name="city" variant="outlined" />
        <TextField fullWidth value={singleproduct.state} onChange={handlecchange} name="state" variant="outlined" />
        <TextField fullWidth value={singleproduct.password} onChange={handlecchange} name="password" variant="outlined" />

        <Button fullWidth onClick={handlesubmit} variant="contained">edit User</Button>

        
        </div>
        </>
    )
}

export default EditUser;