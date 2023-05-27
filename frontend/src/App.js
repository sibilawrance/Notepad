import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CreateNote from './screens/CreateNote/CreateNote.js';
import SingleNote from "./screens/SingleNote";
import { useState } from 'react';
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [search, setSearch] = useState("");
  

  return(
  
  <BrowserRouter>
    <Header  setSearch={setSearch} ></Header>
    <main style = {{minHeight:"93vh"}} >
    <Routes> 
    <Route path='/' Component={LandingPage}/>
    
    <Route path='/register' Component={RegisterScreen}/> 
    <Route path='/login' Component={LoginScreen}/> 
    <Route path="/createnote" Component={CreateNote} />; 
    <Route
          path="/mynotes"   
          Component={( ) => 
            <MyNotes search={search}  />
          }
        />
    <Route path="/note/:id" Component={SingleNote} />
   
    <Route path="/profile" Component={ProfileScreen} />
    </Routes>
    </main>
    <Footer></Footer> 
    </BrowserRouter>
  )
}
    


export default App;
 