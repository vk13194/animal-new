import React, {useContext} from 'react'
import UserContext from '../../context/userContext'
const Profile = () => {
// eslint-disable-next-line
const { userData, setUserData } = useContext(UserContext);
console.log(userData.user)
console.log(userData.user.store)
    return (
        <div className="text-center mt-4">
        <h3> profile</h3> 
        <h4>{userData.user.name}</h4>
        <h6>{userData.user.phonenumber}</h6>
        <>{userData.user.store.map(myid =>
        <p key={myid._id}>{myid.location.county},{myid.location.city},
       {myid.location.state},{myid.location.country} 
        </p>
            )}</>
        </div>
    )
}

export default Profile
