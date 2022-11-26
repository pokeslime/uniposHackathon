import { Button } from '@mui/material';
import { ulid } from 'ulid';
import { useState, ChangeEvent } from 'react';


export const RegisterPage = () => {
  const id = ulid()
  const url = "http://localhost:8000" //To be filled
  const userUrl = url + "/user";
  const [name, setName] = useState<string>("")
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
};
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await fetch(userUrl, {
        method: "POST",
        body: JSON.stringify({
          UserId: id,
          Name: name,
          UserPoint: 0
        }),
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
    } catch (err) {
      console.error(err);
    }
    localStorage.setItem("userId",id)
    localStorage.setItem("name",name)
  };

  return (
    <div>
        <h1 style={{ color: "#0000ff" }}>Register</h1>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmit}>
          <label>Name:</label>
          <input
          type={"text"}
          name="Name"
          value={name}
          onChange={onChangeName}
          required
        ></input>
          <input type="hidden" name= "UserId" value ={id}/>
          <input type="hidden" name="UserPoint" value="0" />
          <br></br>
          <Button href="/"  type="submit">登録</Button>
        </form>
    </div>
  );
};