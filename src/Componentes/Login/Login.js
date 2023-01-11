import React from 'react';
import { auth } from '../../Utils/Firebase/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = (props) => {

  const { email, setEmail, password, setPassword, setIsAuth, navigate } = props;


  const handleLogin = (e) => {
    e.preventDefault();

    // Sign in Existing Users
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setIsAuth(user.email);
      navigate('/resultados');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (

    <div className="auth-form-container">

      <h2>Inicia Sesión</h2>

      <form className="login-form" onSubmit={handleLogin}>

        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tuemail@gmail.com" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

        <button type="submit button" className='btn btn-primary btn-lg'>Iniciar Sesión</button>

      </form>

      <button className="link-button" onClick={() => navigate('/registro')}>¿No tienes una cuenta? ¡Regístrate aquí!</button>

    </div>

  );
}