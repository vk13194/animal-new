import React,{useState, useContext} from 'react'
import {Container, Card} from 'react-bootstrap'
import UserContext from '../context/userContext'
import axios from 'axios'
const Post = () => {
   // eslint-disable-next-line
   const { userData, setUserData } = useContext(UserContext);

    const [post, setPost] = useState({
        animal:'',
        bride:'',
        age:'',
        pregnentTimes:'',
        milkPerDay:'',
        milkcapacity:'',
        price:'',
        whatTimePregnant:'',
        isPregnent:'',
        whatChild:'',
        addInfo:'',
        photo:''
    })
  const [myimage, setMyimage] = useState()
  // eslint-disable-next-line
  const {
   animal,bride,age,pregnentTimes,milkPerDay,milkcapacity,price,whatTimePregnant,
       isPregnent,whatChild,addInfo}=post
const onChange=(e)=>{
setPost({...post,[e.target.name]:e.target.value})
}
const onChange1=(e)=>{
   setMyimage(e.target.files[0])
   }
const onSubmit=(e) =>{
   e.preventDefault();
   const formData = new FormData();
      formData.append('animal',animal);
      formData.append('bride',bride);
      formData.append('age',age);
      formData.append('pregnentTimes',pregnentTimes);
      formData.append('milkPerDay',milkPerDay);
      formData.append('milkcapacity',milkcapacity);
      formData.append('price',price);
      formData.append('whatTimePregnant',whatTimePregnant);
      formData.append('isPregnent',isPregnent);
      formData.append('whatChild',whatChild);
      formData.append('addInfo',addInfo);
      formData.append('photo',myimage);
var token =userData.token
      const config = {
          headers: {
              'content-type': 'multipart/form-data',
              "x-auth-token": token
          }
      };
      axios.post('http://localhost:5000/api/createpost1',formData,config)
      .then((res)=>{
         alert("The file is successfully uploaded");
      })
      
}
    return (
        <Container className="shadow-lg p-3 mb-5 bg-white rounded ">
           <Card style={{marginTop:"20px"}} className="shadow-lg p-3 bg-white rounded ">
           <Card.Header as="h5">Shell Animal </Card.Header>
           <Card.Text>
            <form onSubmit={onSubmit} encType="multipart/form-data">
      
            <div className="form-group">
          <label for="animal">Enter Animal Name </label>
         <input type="text" className="form-control" id="animal"
         placeholder="Enter animal name" 
         name='animal' value={animal} onChange={onChange}
         />
        </div>

        <div className="form-group">
         <label for="bride">Enter Animal Bride </label>
      <input type="text" className="form-control" id="bride"
       placeholder="Enter animal bride"
       name='bride' value={bride} onChange={onChange}
        />
        </div>


        <div className="form-group">
         <label for="age">Enter Animal age </label>
      <input type="text" className="form-control" id="age"
       placeholder="Enter animal Age"
       name='age' value={age} onChange={onChange}
        />
        </div>

        <div className="form-group">
         <label htmlFor="pregnentTimes">Enter Animal pregnentTimes </label>
      <input type="text" className="form-control" id="pregnentTimes"
       placeholder="Enter animal pregnentTimes"
       name='pregnentTimes' value={pregnentTimes} onChange={onChange}
        />
        </div>

        <div className="form-group">
         <label htmlFor="milkPerDay">Enter Animal milkPerDay </label>
      <input type="text" className="form-control" id="milkPerDay"
       placeholder="Enter animal pregnent"
       name='milkPerDay' value={milkPerDay} onChange={onChange}
        />
        </div>

        <div className="form-group">
         <label htmlFor="milkcapacity">Enter Animal milkcapacity</label>
      <input type="text" className="form-control" id="milkcapacity"
       placeholder="Enter animal milkcapacity"
       name='milkcapacity' value={milkcapacity} onChange={onChange}
        />
        </div>

        <div className="form-group"  >
         <label htmlFor="price">Enter Animal price </label>
      <input type="text" className="form-control" id="price"
       placeholder="Enter animal price" 
       name='price' value={price} onChange={onChange}
       />
        </div>

        <div className="form-group">
         <label htmlFor="whatTimePregnant">Enter Animal whatTimePregnant </label>
      <input type="text" className="form-control" id="whatTimePregnant"
       placeholder="Enter animal whatTimePregnant"
       name='whatTimePregnant' value={whatTimePregnant} onChange={onChange}
        />
        </div>

        <div className="form-group">
         <label htmlFor="isPregnent">Enter Animal isPregnent </label>
      <input type="text" className="form-control" id="isPregnent"
       placeholder="Enter animal isPregnent"
       name='isPregnent' value={isPregnent} onChange={onChange}
        />
        </div>

        <div className="form-group">
         <label htmlFor="whatChild">Enter Animal whatChild </label>
      <input type="text" className="form-control" id="whatChild"
       placeholder="Enter animal whatChild"
       name='whatChild' value={whatChild} onChange={onChange}
        />
        </div>

        <div className="form-group">
         <label htmlFor="image">Enter image </label>
      <input type="file" className="form-control" id="image"
       name='photo'  onChange={onChange1}
        />
        </div>

        <div className="form-group">  
      <input type="submit" className="form-control bg-primary text-white"  />
        </div>
            </form>
           </Card.Text>
            </Card> 
            </Container>
    )
}

export default Post
