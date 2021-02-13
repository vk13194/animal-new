import React, {useContext} from 'react'
import UserContext from '../../context/userContext'
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {CgProfile } from "react-icons/cg";

const Profile = () => {
// eslint-disable-next-line
const { userData, setUserData } = useContext(UserContext);
console.log(userData.user)
console.log(userData.user.store)
    return (
        <div className="text-center mt-4">
        <h2 className="font-weight-bold " style={{fontSize:"150px"}}><CgProfile /></h2> 
        <h4><BsFillPersonFill/>Your Name: {userData.user.name}</h4>
        <h5> <AiFillPhone /> PhoneNumber : {userData.user.phonenumber}</h5>
        <>{userData.user.store.map(myid =>
        <p key={myid._id}> <GoLocation /> {myid.location.county},{myid.location.city},
       {myid.location.state},{myid.location.country} 
        </p>
            )}</>
        </div>
    )
}

export default Profile
