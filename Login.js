import React, { useState } from 'react'

function LoginPage() {
    
    const [name, setName] = useState({username: '',password:''})

    return(
        <div>
            <p><input name='username' value={name.username} onChange={e => setName({...name,username: e.target.value})} /></p>
            <p><input name='password' value={name.password} onChange={e => setName({...name,password: e.target.value})} /></p>
            <p><button>EnteredDetails</button></p>
        </div>
    )

}

export default LoginPage