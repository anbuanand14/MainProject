import React, { useState } from 'react';

function CompleteForm(){

    const [className, setclassName] = useState('')

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [gender, setGender] = useState('none')
    const [email, setEmail] = useState('')
    const [mobilenum, setMobilenum] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state1, setState1] = useState('')
    const [country, setCountry] = useState('')
    const [pincode, setPincode] = useState('')

    const SubmittedDetails = () => {
        alert(
            `Here are the details
            ${firstname}
            ${middlename}
            ${lastname}
            ${password}
            ${cpassword}
            ${gender}
            ${email}
            ${mobilenum}
            ${address1}
            ${address2}
            ${city}
            ${state1}
            ${country}
            ${pincode}`
        )
    }

    return(
        <div>
        <form onSubmit={SubmittedDetails}>            
            <table>
                <thead><h1>To Try a Form using Functional Component</h1></thead>
                <tbody>
                    <tr><td>First Name:</td><td><input type='text' className='firstname' onChange={(e) => setFirstname(e.target.value)} /></td></tr>
                    <tr><td>Middle Name:</td><td><input type='text' className='middlename' onChange={(e) => setMiddlename(e.target.value)} /></td></tr>
                    <tr><td>Last Name:</td><td><input type='text' className='lastname' onChange={(e) => setLastname(e.target.value)} /></td></tr>
                    <tr><td>Password:</td><td><input type='text' className='password' onChange={(e) => setPassword(e.target.value)} /></td></tr>
                    <tr><td>Confirm Password:</td><td><input type='text' className='cpassword' onChange={(e) => setCpassword(e.target.value)} /></td></tr>                    
                    <tr><td>Gender:</td><td>
                        <select className='gender' defaultValue='none' onChange={(e) => setGender(e.target.value)}>
                            <option value='none'>---select---</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='pref'>Prefer not to say</option>
                        </select>                        
                    </td></tr>
                    <tr><td>Email Address:</td><td><input type='text' className='emailaddress' onChange={(e) => setEmail(e.target.value)} /></td></tr>
                    <tr><td>Mobile Number:</td><td><input type='text' className='mobilenumber' onChange={(e) => setMobilenum(e.target.value)} /></td></tr>
                    <tr><td>Address1 1:</td><td><input type='text' className='address1' onChange={(e) => setAddress1(e.target.value)} /></td></tr>
                    <tr><td>Address1 2:</td><td><input type='text' className='address2' onChange={(e) => setAddress2(e.target.value)} /></td></tr>
                    <tr><td>City:</td><td><input type='text' className='city1' onChange={(e) => setCity(e.target.value)} /></td></tr>
                    <tr><td>State:</td><td><input type='text' className='state1' onChange={(e) => setState1(e.target.value)} /></td></tr>
                    <tr><td>Country:</td><td><input type='text' className='country' onChange={(e) => setCountry(e.target.value)} /></td></tr>
                    <tr><td>Pincode:</td><td><input type='text' className='pincode' onChange={(e) => setPincode(e.target.value)} /></td></tr>
                    <tr><td colSpan='2'><button type='submit'>Submit</button></td></tr>
                </tbody>
            </table>
        </form>
        </div>
    )
}

export default CompleteForm