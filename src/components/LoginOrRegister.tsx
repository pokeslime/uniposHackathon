import { BrowserRouter, Link } from 'react-router-dom';

export const LoginOrRegister = () => {
    return (
        <BrowserRouter>
          <h1>Unipos</h1>
          <h2>Let's Get it Started.</h2>
          <br></br><br></br><br></br><br></br>
          <ul>
            <li>
                <Link to="/login">ログイン</Link>
            </li>
            <br></br>
            <li>
                <Link to="/register">新規登録</Link>
            </li>
          </ul>
        </BrowserRouter>
    );
};