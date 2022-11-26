import { useState, useEffect } from 'react';
import { User } from '../types/UserType';
import { UserMessage } from '../types/UserMessageType'

//送受信した貢献の一覧
export const MyData = () => {

    //User情報を取得
    const url = "http://localhost:8000"　//To be filled
    const localUserId = localStorage.getItem("userId");
    const localUserName = localStorage.getItem("name");
    const[user,setUser]=useState<User>({UserId:"",Name:"",UserPoint:0});
    const URL = url+ "/user?userId=" + localUserId;  //クエリパラメータ　Goで対応
    useEffect(() => {
        fetch(URL)
    　　.then(response=> {return response.json()})
    　　.then((json)=>setUser(json))},[]);
  
    //受信済みメッセージ　
    const [receiveMessage,setReceiveMessage] = useState<UserMessage[]>([]);
    const ReceiveUserUrl= url + "/receiveMessage?name=" + localUserName; //クエリパラメータ Goで対応
    useEffect(() =>{
        fetch(ReceiveUserUrl)
    　　.then((response:any)=> {return response.json()})
    　　.then((json)=>setReceiveMessage(json))},[]);
  
    //送信済みメッセージ 
    const [sendMessage,setSendMessage] = useState<UserMessage[]>([])
    const SendMessageUrl= url + "/sendMessage?userId=" + localUserId
    useEffect(()=>{
        fetch(SendMessageUrl)
        .then((response:any)=> {return response.json()})
        .then((json)=>setSendMessage(json))},[]);
    
    return (
      <div>
        <h1> 現在のポイント:{user.UserPoint}</h1>
        <br></br>
        <p>受信したメッセージ</p>
        <ul>
          {receiveMessage.map((receiveMessage)=>(
            <div key={receiveMessage.MessageId}>
              <p>{receiveMessage.MessageText}</p>
              <p>from:{receiveMessage.Name}</p>
              <p>ポイント: {receiveMessage.MessagePoint}</p>
            </div>
          ))}
        </ul>
        <br></br>
        <p>送信したメッセージ</p>
        <ul>
            {sendMessage.map((sendMessage)=> (
              <div key={sendMessage.MessageId}>
                <p>{sendMessage.MessageText}</p>
                <p>to:{sendMessage.Name}</p>
                <p>ポイント:{sendMessage.MessagePoint}</p>
              </div>
            ))}
        </ul>
      </div>
    );
  }