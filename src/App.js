
import MainContainer from './components/mainconatiner'
import { Route, Switch, /*BrowserRouter,  Redirect */ } from 'react-router-dom'
import AddRole from './components/addRole';
import CreateEmploye from './components/createEmploye';
function App() {
  return (
    <div className="App">
      <Route exact path='/'>
      <MainContainer />
      </Route>
     
      <Switch>
      <Route exact path='/page-2'>
							<AddRole />
					</Route>
          <Route exact path='/page-3'>
							<CreateEmploye />
					</Route>
          </Switch>
    </div>
  );
}

export default App;
