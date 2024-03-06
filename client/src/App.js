import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import SiteLayuot from './components/layout/site/SiteLayuot';
import DashLayout from './components/layout/dash/DashLayout';
import UsersList from './features/users/list/UsersList';
import AddUser from './features/users/add/AddUser';
import SingleUser from './features/users/view/SingleUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SiteLayuot />}>
            <Route index element={<h1>Site</h1>} />
            <Route path='/dash' element={<DashLayout />}>
              <Route index element={<h1>Dashboard</h1>} />
              <Route path='users' element={<Outlet />}>
                <Route index element={<UsersList />} />
                <Route path='add' element={<AddUser/>}/>
                <Route path=':id' element={<SingleUser/>}/>

              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;