import { useState, useEffect } from 'react';
import { UserMessage } from '../types/UserMessageType';
import { Button,} from '@mui/material';
import { Menu } from './Menu';

export const DeletePage = () => {

    const url = "http://localhost:8000" //To be filled
    const localUserId = localStorage.getItem("userId");

    const [sendMessage,setSendMessage] = useState<UserMessage[]>([])
    const sendMessageUrl= url+ "/sendMessage?userId=" + localUserId
    
    useEffect(()=>{
        fetch(sendMessageUrl)
        .then((response:any)=> {return response.json()})
        .then((json)=>setSendMessage(json))},[]);

    const deleteMessage = (messageId: any) => {
        const deleteMessageUrl = url + "/sendMessage?messageId=" + messageId
        console.log(localUserId)
        fetch(deleteMessageUrl, { method: 'DELETE' })
    };

    return (
        <div>
            <header>
                <h1>Unipos</h1>
                <br></br>
                <Menu />
            </header>
            <br></br><br></br>
            <body>
                <h1>送信したメッセージ</h1>   
                {sendMessage.map((sendMessage) => (
                    <div key={sendMessage.MessageId}>
                        <p>To:{sendMessage.Name},Point:{sendMessage.MessagePoint}ポイント</p>
                        <p>{sendMessage.MessageText}</p>
                        <Button href="/home" onClick={() => deleteMessage(sendMessage.MessageId)}>このメッセージを削除</Button>
                    </div>    
                ))}
            </body>
        </div>
    );
};