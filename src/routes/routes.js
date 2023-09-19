import About from '../components/admin/About';
import Dashboard from '../components/admin/Dashboard'; 
import Profile from '../components/admin/Profile';


 
const routes = [

    { path: '/', exact:true, name: 'Admin' },
    { path: '/admin/dashboard',  exact:true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/profile',  exact:true, name: 'Profile', component: Profile },
    { path: '/admin/about',  exact:true, name: 'About', component: About },
    
  ];


export default routes; 



 