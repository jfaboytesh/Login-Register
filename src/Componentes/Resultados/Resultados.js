import React from 'react';
import { auth } from '../../Utils/Firebase/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { xml2json } from 'xml-js';

export const Resultados = ({ setEmail, setPassword, isAuth, setIsAuth, navigate }) => {

  if(!isAuth) {
    return <Navigate to="/" replace />
  }

  const xml = `<?xml version="1.0" encoding="utf-8"?>
  <employees>
    <employee id="be129">
      <firstname>Jitendra</firstname>
      <lastname>Kumar</lastname>
      <title>Engineer</title>
      <division>Materials</division>
      <building>327</building>
      <room>19</room>
    </employee>
    <employee id="be130">
      <firstname>Amit</firstname>
      <lastname>Kumar</lastname>
      <title>Accountant</title>
      <division>Accts Payable</division>
      <building>326</building>
      <room>14</room>
    </employee>
    <employee id="be131">
      <firstname>Akash</firstname>
      <lastname>Kumar</lastname>
      <title>Engineering Manager</title>
      <division>Materials</division>
      <building>327</building>
      <room>21</room>
    </employee>
    <employee id="be132">
      <firstname>Aishwarya</firstname>
      <lastname>Kulshrestha</lastname>
      <title>Engineer</title>
      <division>Materials</division>
      <building>327</building>
      <room>22</room>
    </employee>
    <employee id="be133">
      <firstname>Sachin</firstname>
      <lastname>Kumar</lastname>
      <title>Engineer</title>
      <division>Materials</division>
      <building>327</building>
      <room>24</room>
    </employee>
    <employee id="be135">
      <firstname>Vikash</firstname>
      <lastname>kumar</lastname>
      <title>COO</title>
      <division>Management</division>
      <building>216</building>
      <room>26</room>
    </employee>
    <employee id="be136">
      <firstname>Suvam</firstname>
      <lastname>Basak</lastname>
      <title>Accountant</title>
      <division>Accts Payable</division>
      <building>326</building>
      <room>30</room>
    </employee>
    <employee id="be135">
      <firstname>Abhinav</firstname>
      <lastname>kumar</lastname>
      <title>COO</title>
      <division>Management</division>
      <building>216</building>
      <room>32</room>
    </employee>
    <employee id="be131">
      <firstname>DhanPal</firstname>
      <lastname>Singh</lastname>
      <title>Engineering Manager</title>
      <division>Materials</division>
      <building>327</building>
      <room>21</room>
    </employee>
  
  </employees>`;
  const json = xml2json(xml, {spaces: 2, compact: false});
  const jsonParse = JSON.parse(json);
  const accessRoute = jsonParse.elements[0].elements;

  const employees = [

    {
      employeeId : accessRoute[0].attributes.id,
      employeeFirstname : accessRoute[0].elements[0].elements[0].text,
      employeeLastname : accessRoute[0].elements[1].elements[0].text,
      employeeTitle : accessRoute[0].elements[2].elements[0].text,
      employeeDivision : accessRoute[0].elements[3].elements[0].text,
      employeeBuilding : accessRoute[0].elements[4].elements[0].text,
      employeeRoom : accessRoute[0].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[1].attributes.id,
      employeeFirstname : accessRoute[1].elements[0].elements[0].text,
      employeeLastname : accessRoute[1].elements[1].elements[0].text,
      employeeTitle : accessRoute[1].elements[2].elements[0].text,
      employeeDivision : accessRoute[1].elements[3].elements[0].text,
      employeeBuilding : accessRoute[1].elements[4].elements[0].text,
      employeeRoom : accessRoute[1].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[2].attributes.id,
      employeeFirstname : accessRoute[2].elements[0].elements[0].text,
      employeeLastname : accessRoute[2].elements[1].elements[0].text,
      employeeTitle : accessRoute[2].elements[2].elements[0].text,
      employeeDivision : accessRoute[2].elements[3].elements[0].text,
      employeeBuilding : accessRoute[2].elements[4].elements[0].text,
      employeeRoom : accessRoute[2].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[3].attributes.id,
      employeeFirstname : accessRoute[3].elements[0].elements[0].text,
      employeeLastname : accessRoute[3].elements[1].elements[0].text,
      employeeTitle : accessRoute[3].elements[2].elements[0].text,
      employeeDivision : accessRoute[3].elements[3].elements[0].text,
      employeeBuilding : accessRoute[3].elements[4].elements[0].text,
      employeeRoom : accessRoute[3].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[4].attributes.id,
      employeeFirstname : accessRoute[4].elements[0].elements[0].text,
      employeeLastname : accessRoute[4].elements[1].elements[0].text,
      employeeTitle : accessRoute[4].elements[2].elements[0].text,
      employeeDivision : accessRoute[4].elements[3].elements[0].text,
      employeeBuilding : accessRoute[4].elements[4].elements[0].text,
      employeeRoom : accessRoute[4].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[5].attributes.id,
      employeeFirstname : accessRoute[5].elements[0].elements[0].text,
      employeeLastname : accessRoute[5].elements[1].elements[0].text,
      employeeTitle : accessRoute[5].elements[2].elements[0].text,
      employeeDivision : accessRoute[5].elements[3].elements[0].text,
      employeeBuilding : accessRoute[5].elements[4].elements[0].text,
      employeeRoom : accessRoute[5].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[6].attributes.id,
      employeeFirstname : accessRoute[6].elements[0].elements[0].text,
      employeeLastname : accessRoute[6].elements[1].elements[0].text,
      employeeTitle : accessRoute[6].elements[2].elements[0].text,
      employeeDivision : accessRoute[6].elements[3].elements[0].text,
      employeeBuilding : accessRoute[6].elements[4].elements[0].text,
      employeeRoom : accessRoute[6].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[7].attributes.id,
      employeeFirstname : accessRoute[7].elements[0].elements[0].text,
      employeeLastname : accessRoute[7].elements[1].elements[0].text,
      employeeTitle : accessRoute[7].elements[2].elements[0].text,
      employeeDivision : accessRoute[7].elements[3].elements[0].text,
      employeeBuilding : accessRoute[7].elements[4].elements[0].text,
      employeeRoom : accessRoute[7].elements[5].elements[0].text
    },

    {
      employeeId : accessRoute[8].attributes.id,
      employeeFirstname : accessRoute[8].elements[0].elements[0].text,
      employeeLastname : accessRoute[8].elements[1].elements[0].text,
      employeeTitle : accessRoute[8].elements[2].elements[0].text,
      employeeDivision : accessRoute[8].elements[3].elements[0].text,
      employeeBuilding : accessRoute[8].elements[4].elements[0].text,
      employeeRoom : accessRoute[8].elements[5].elements[0].text
    }
  ];

  console.log(employees);

  const logOut = async () => {
    await signOut(auth);
    navigate('/');
    setIsAuth(null);
    setEmail('');
    setPassword('');
  }

  return (

    <div>

      <h2>¡Bienvenido a la empresa!</h2>

      <div className='employee-card'>
        {employees.map(employee => {
          return(
              <div className="card" style={{width: "18rem"}} key={[employee][0].employeeId}>
                <div className="card-body">
                  <h5 className="card-title">{[employee][0].employeeFirstname} {[employee][0].employeeLastname}</h5>
                  <h5 className="card-title">{[employee][0].employeeTitle}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{[employee][0].employeeDivision}  {[employee][0].employeeBuilding}</h6>
                  <p className="card-text">Some quick welcome message here:</p>
                </div>
              </div>
          )
        })}
      </div>
    
      
      <button className='btn btn-dark' onClick={logOut}>Cerrar Sesión</button>
    </div>
  );
}