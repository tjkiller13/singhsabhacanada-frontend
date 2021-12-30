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
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" name="email"/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password"/>
            </div>
            <div>
                <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Log-In</button>
            </div>
        </form>
        </div>
    )
}

export default Login
