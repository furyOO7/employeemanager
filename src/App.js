
import MainContainer from './components/mainconatiner'
import { Route, Switch, /*BrowserRouter,  Redirect */ } from 'react-router-dom'
import AddRole from './components/addRole';
import CreateEmpFormComponent from './components/CreateEmpFormComponent/CreateEmpFormComponent'
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
							<CreateEmpFormComponent />
					</Route>
          </Switch>
    </div>
  );
}

export default App;
