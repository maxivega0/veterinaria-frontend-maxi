import React from 'react';
import TablaTurnos from './Turnos/TablaTurnos';
import ColumnaIzquierda from './Turnos/ColumnaIzquierda';
import '../../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdmPacientes from './AdmPacientes';
import AdmTurnos from './AdmTurnos';
import AdmUsuarios from './AdmUsuarios';


const Administrador = () => {
  return (
    <>
    <Container fluid className='text-center'>
      <Row className='text-center'>
      <Col xs={3} className="d-none d-sm-block">
          <ColumnaIzquierda></ColumnaIzquierda>
        </Col>
        <Col xs={12} md={9}>
          <div>
            <h2>Bienvenido!</h2>
            <hr />
            <div className='d-md-none'>
            <Link to ='admpacientes/' className='btn btn-primary text-decoration-none text-light ms-5 me-5'>Pacientes</Link>
            <Link to ='admturnos/' className='btn btn-primary text-decoration-none text-light ms-5 me-5'>Turnos</Link>
            <Link to ='admusuarios/' className='btn btn-primary text-decoration-none text-light ms-5 me-5'>Usuarios</Link>
            </div>
          </div>
            <p>Estos son los turnos reservados de los próximos días:</p>
          <TablaTurnos />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Administrador;