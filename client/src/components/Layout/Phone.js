import React, {useState} from 'react'
import { Container,Card } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Phone = () => {
  const history = useHistory();

  const [post, setPost] = useState({
   name:"",
   phonenumber:""
  })
  const {name, phonenumber}= post
  const onChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
    }
    console.log(post)
  const onSubmit = async(e)=>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/login',post)
    console.log('success')
    history.push('/otp')
    } catch (err) {
      console.log(err)
    }
   
  }
    return (
        <Container className="mt-5">
        <Card>
  <Card.Header as="h5">Enter your detail</Card.Header>
  <Card.Body>
    <Card.Text>
    <form onSubmit={onSubmit}>
    <div className="form-group">
    <label htmlFor="name">enter your name</label>
    <input type="text" className="form-control"
     id="name"  placeholder="enter your name"
     name='name' value={name} onChange={onChange}
      />
  </div>
  <div className="form-group">
    <label htmlFor="phonenumber">enter your phonenumber</label>
    <input type="text" className="form-control"
     id="phonenumber"  placeholder="enter your phonenumber" 
     name='phonenumber' value={phonenumber} onChange={onChange}
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
    )
}

export default Phone
