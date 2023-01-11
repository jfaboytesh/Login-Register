import React, { useState } from 'react';
import './App.css';
import { Login } from './Componentes/Login/Login';
import { Registro } from './Componentes/Registro/Registro';
import { Resultados } from './Componentes/Resultados/Resultados';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
          <Login email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            isAuth={isAuth} 
            setIsAuth={setIsAuth} 
            navigate={navigate} />
          } 
        />

        <Route path="/registro" element={
          <Registro email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            isAuth={isAuth} 
            setIsAuth={setIsAuth} 
            nombre={nombre} 
            setNombre={setNombre} 
            navigate={navigate} />
          } 
        />

        <Route path="/resultados" element={
          <Resultados isAuth={isAuth} 
            setIsAuth={setIsAuth} 
            setEmail={setEmail} 
            setPassword={setPassword} 
            nombre={nombre} 
            navigate={navigate} />
          } 
        />

        <Route path="*" element={<p>Oh oh! ¡No hay nada aquí: 404!</p>} />
      </Routes>

    </div>

  );
}

export default App;
