import React,{useState, useContext} from 'react'
import { Container,Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import UserContext from '../../context/userContext'
const Otp = () => {
  const history = useHistory();

  const [myotp, setMyotp] =useState({
    phonenumber:'',
    code:''
  })
  // eslint-disable-next-line
  const [user, setUser]=useState({
    name:'',
    phonenumber:''
  })
  const { setUserData } = useContext(UserContext);
  const {phonenumber,code} =myotp
  const onChange=(e)=>{
    setMyotp({...myotp,[e.target.name]:e.target.value})
    }
const onSubmit = async (e )=>{
  e.preventDefault();
  try {
   const res= await axios.post('http://localhost:5000/api/verify',myotp)
   setUser({
     name:res.data.phone.name,
     phonenumber:res.data.phone.phonenumber
  })
    localStorage.setItem("x-auth-token",res.data.token);
    setUserData({
      token:res.data.token,
      user:res.data.phone
    })
   console.log("otp",res)
   //console.log(res.data.token)
    history.push('/address')
  } catch (err) {
    console.log(err)
  }

}

    return (
      <div>
           <Container className="mt-5">
        <Card>
  <Card.Header as="h5">Enter your detail</Card.Header>
  <Card.Body>
    <Card.Text>
    <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="phonenumber">Enter your phonenumber</label>
    <input type="text" className="form-control"
     id="phonenumber"  placeholder="enter your phonenumber" 
     name='phonenumber' value={phonenumber} onChange={onChange}
     />
  </div>
  <div className="form-group">
    <label htmlFor="code">Enter your code</label>
    <input type="text" className="form-control"
     id="code"  placeholder="enter your code" 
     name='code' value={code} onChange={onChange}
     />
  </div>
  <div className="form-group">  
      <input type="submit" className="form-control"  />
        </div>
  </form>
    </Card.Text>
  </Card.Body>
</Card>
        </Container>
        </div>
        
    )

}

export default Otp
