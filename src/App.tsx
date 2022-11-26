import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { LoginOrRegister } from './components/LoginOrRegister';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { HomePage } from './components/HomePage';
import { MemberPage } from './components/MemberPage';
import { ContributionPage } from './components/ContributionPage'; 
import { DeletePage } from './components/DeletePage';

export const App = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={LoginOrRegister} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/member" component={MemberPage} />
        <Route path="/contribution" component={ContributionPage} />
        <Route path="/delete" component={DeletePage} />
  </BrowserRouter>
  );
};