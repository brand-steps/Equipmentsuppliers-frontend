import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './allcustomer.css'
import AdminBar from '../../HOme/AdminBar';

const EditCustomers = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [SingleCustomer, setSingleCustomer] = useState([]);



    const fetchSingleCustomer = async() => {
        const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/editcustomer/${id}`);
        console.log("response: ", response);
      console.log(SingleCustomer);
      setSingleCustomer(response.data.Product);
            }

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        setSingleCustomer(()=> {
            return {
                ...SingleCustomer, [name]: value
            }
        })

 
    };
    

    const handlesubmit = async () => {
        const UserData = { ...SingleCustomer};
        const response = await axios.put(`https://sore-cyan-fly-kit.cyclic.app/edittedCustomer/${id}`, UserData);
        alert("User Updated");
        navigate("/Allcustomers");
    }
    
    useEffect (()=> {
        fetchSingleCustomer()

    },[]);

    return (
        <>
        <AdminBar/>
    <div className='rootcontainer'>
        <h1 className='Heading'>EDIT CUSTOMERS</h1>
        <TextField fullWidth value={SingleCustomer.firstname} onChange={handlecchange} placeholder='First Name' name="firstname" variant="outlined"  />
        <TextField fullWidth value={SingleCustomer.lastname} onChange={handlecchange} name="lastname" placeholder='Last Name' variant="outlined"  />
        <TextField fullWidth value={SingleCustomer.email} onChange={handlecchange} name="email" placeholder='Customer Email Address' variant="outlined" />
        <TextField fullWidth value={SingleCustomer.phone} onChange={handlecchange} name="phone" placeholder='Phone Number' type='number' variant="outlined" />
        <TextField fullWidth value={SingleCustomer.postal} onChange={handlecchange} name="postal" placeholder='Postal Code' type='number' variant="outlined" />
        <TextField fullWidth value={SingleCustomer.address} onChange={handlecchange} name="address" placeholder='Customer Address' variant="outlined" />
        <TextField fullWidth value={SingleCustomer.country} onChange={handlecchange} name="country" placeholder='Country' variant="outlined" />
        <TextField fullWidth value={SingleCustomer.city} onChange={handlecchange} name="city" placeholder='City' variant="outlined" />
        <TextField fullWidth value={SingleCustomer.state} onChange={handlecchange} name="state" placeholder='State' variant="outlined" />
        <TextField fullWidth value={SingleCustomer.password} onChange={handlecchange} name="password" placeholder='Password' variant="outlined" />
        <Button fullWidth onClick={handlesubmit} variant="contained">edit User</Button>

        
        </div>
        </>
    )
}

export default EditCustomers;