
import Home from  './Pages/home'
import NewTask from './Pages/newtask'
import NewUser from './Pages/newuser'
import Dashboard from './Pages/dashboard'
import Test from './Pages/Test'
import Layout from './Layout'

import { HashRouter  as BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route element={<Layout />} >
    <Route path="/" element={<Home />} /> 
    <Route path="/newtask" element={<NewTask />} /> 
    <Route path="/newuser" element={<NewUser />} /> 
    <Route path="/dashboard" element={<Dashboard />} /> 
    <Route path="/Test" element={<Test />} /> 
  </Route>
  </Routes>
</BrowserRouter>
)
}

export default App;
