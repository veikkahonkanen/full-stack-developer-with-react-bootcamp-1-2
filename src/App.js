import './styles.css';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom';
import Home from './Components/home/home';
import Customers from './Components/customers/customers';
import Register from './Components/register/register';
import Login from './Components/login/login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/customers" component={Customers} />
      </BrowserRouter>
    </div>
  );
}

export default App;
