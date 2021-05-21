import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OffersListPage from './pages/OffersListPage';
import OffersPage from './pages/OffersPage';
import './App.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/all-offers' component={OffersListPage} />
          <Route path='/' component={OffersPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
