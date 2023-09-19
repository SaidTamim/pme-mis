 

import React from 'react'; 
import MasterLayout from './layouts/admin/MasterLayout';
import { BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom' 

import routes from './routes/routes';

import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Home from './components/frontend/Home' 

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            {/* <Route path="/" element={<div>Default Page Content</div>} /> */}
            
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/admin" element={<MasterLayout />}>

              {routes
                .filter(route => route.component)
                .map(({ path, component: Component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Component />}
                  />
                )
              )}
              <Route index element={<Navigate to="/admin/dashboard"/>} />
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
