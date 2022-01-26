import React,{useEffect, useState} from 'react';
import { getUsers } from '../../../api/apiCalls';
import XTable from './../../../x-lib/components/X-Table';

const initialState = {
  users: []
};
const UserList = () => {

  const [state, setState] = useState(initialState);

  useEffect(()=>{
    getUsers()
      .then((response)=>{
        console.log(response.data)
        setState({...state, users: response.data});
      })
      .catch((error)=>{})
  },[]);

/*   const onDelete = (index) => {
    //console.log(index," - index ci" )
    const users = [...state.users];
    users.splice(index,1);
    setState({ ...state, users: users })
  } */

  return <div>
   {/*  {state.users.map( (user,index)=> (<UserItem key={user.username} user = {user} onDelete = {()=>onDelete(index)} /> ) )} */}
   
   {
       state.users.map((user)=>(
           <XTable username = {user.username} />
       ))
   }
  </div>;
};

export default UserList;







/* function UserItem(props) {
 
  const [user, setUser] = useState({});
  useEffect(()=>{
    console.log(props.user)
    setUser({...user, ...props.user});
  },[]);

  return (
    <div>
      {user.username}<button onClick={props.onDelete}> sil </button>
    </div>
  )
} */