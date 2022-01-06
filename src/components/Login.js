import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {

    useEffect(() => {
        document.title = `Singh Sabha Canada | ${props.category}`;
        // eslint-disable-next-line
    }, [])

    const [credentials, setCredentials] = useState({email:"",password:""})
    let history = useHistory()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
              //redirect
              localStorage.setItem('token', json.authtoken)
              history.push("/");
              props.showAlert("You have logged in!","success")
          }
          else{
              props.showAlert("Invalid credentials","danger")
          }
    }

    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    return (
        <div className="container mt-5">
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-2 my-1">
                <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} required />
                <span className="input-group-text myinput" id="basic-addon2">@example.com</span>
            </div>
            <div className="input-group mb-2 my-1">
                <span className="input-group-text myinput" id="basic-addon1">Password</span>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Enter your Password" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} required />
            </div>
            <div class="text-center mt-3">
                <button type="submit" onSubmit={handleSubmit} id="submit" className="btn btn-primary">Log-In</button>
            </div>
        </form>
        </div>
    )
}

export default Login
