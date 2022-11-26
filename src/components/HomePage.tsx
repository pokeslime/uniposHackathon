import Button from '@mui/material/Button';
import { MyData } from './MyData';
import { Menu } from './Menu';

export const HomePage = () => {

  return (
    <div>
        <header>
            <h1>Unipos</h1>
            <br></br>
            <Menu />
        </header>
        <br></br><br></br><br></br>
        <body>
            <MyData />
            <br></br>
            <Button href="/login">ログイン</Button>
            <Button href="/register">新規登録</Button>
        </body>
    </div>
  );
};