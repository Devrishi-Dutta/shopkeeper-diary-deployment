import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const API_URL=`https://fair-gray-gecko-wear.cyclic.app`;
    const navigate = useNavigate();
    const userId = JSON.parse(localStorage.getItem('users'))._id;

    const getUserDetails = async () => {
        let result = await fetch(`${API_URL}/user/${userId}`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setEmail(result.email);

    }

    useEffect(() => {
        getUserDetails();
    }, []);


    const updateProfile = async () => {
        let result = await fetch(`${API_URL}/user/${userId}`, {
            method: 'Put',
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result);
        navigate('/sellers');
    }
    return (
        <div className='addproduct'>
            <h3>Profile</h3>
            <div className='profiledetails'><label>Name:</label>
                <input type='text' className='inputbox' value={name} onChange={(e) => { setName(e.target.value) }}
                />
                <label>Email:</label>
                <input type='text' className='inputbox' value={email} onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>

            <button onClick={updateProfile} className='inputboxButton'> Save</button>
        </div>
    );
}
export default Profile;