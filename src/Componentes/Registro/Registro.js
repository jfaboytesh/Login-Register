import React  from 'react';
import { auth } from '../../Utils/Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Registro = (props) => {

  const { email, setEmail, password, setPassword, setIsAuth, nombre, setNombre, navigate } = props;

  const handleRegister = (e) => {
    e.preventDefault();

    // Sign in creating a new user
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setIsAuth(user.email);
      navigate('/resultados');
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (

    <div className="auth-form-container">

      <h2>Regístrate</h2>

      <form className="register-form" onSubmit={handleRegister}>

        <label htmlFor="nombre">Nombre Completo</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" name="nombre" id="nombre" placeholder="Nombre Completo" />

        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tuemail@gmail.com" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

        <button type="submit button" className='btn btn-primary btn-lg'>Regístrate</button>

      </form>

      <button className="link-button" onClick={() => navigate('/')}>¿Ya tienes una cuenta? ¡Inicia sesión aquí!</button>

    </div>

  );
}