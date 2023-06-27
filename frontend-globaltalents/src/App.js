import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Clientdashboard } from './Pages/Clientdashboard';
import { Jobposting } from './Pages/Jobposting';
import { Detailedjobpage } from './Pages/Detailedjobpage';
import { Allproposalspage } from './Pages/Allproposalspage';
import { Hiredfreelancerpage } from './Pages/Hiredfreelancerpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/client' element={<Clientdashboard/>}/>
      <Route path='/postjob' element={<Jobposting/>}/>
      <Route path='/details' element={<Detailedjobpage/>}/>
      <Route path='/proposals' element={<Allproposalspage/>}/>
      <Route path='/hired' element={<Hiredfreelancerpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
