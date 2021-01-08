import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
    <Router>
           <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
        <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        </Switch>
      </main>
      <Footer />
      </Router>
    </>

  );
}

export default App;
