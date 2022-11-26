import { useEffect, useState } from 'react'
import { User } from '../types/UserType'
import { Menu } from './Menu';

export const MemberPage = () => {
  
  const[users,setUsers]=useState<User[]>([])
  const url = "http://localhost:8000" //To be filled
  const userURL = url + "/user"
  useEffect(()=>{
    fetch(userURL)
    .then(response=>{return response.json()})
    .then(json=>setUsers(json))},[])
  console.log(users)

  return (
    <div>
      <header>
        <h1>Unipos</h1>
        <br></br>
        <Menu />
      </header>
      <br></br><br></br>
      <body>
        <h1>メンバー</h1>
        {users.map((user)=>(
            <div key={user.UserId}>
                <li>name:{user.Name},point:{user.UserPoint}ポイント</li>
            </div>
        ))}
      </body>
    </div>
  )
};