import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import bgimg from './bg1.jpg';
import bgheader from './banner.png';

class Login extends Component {
  render() {
    return (
        <div className="Login" style={{backgroundImage:'url('+bgimg+')', backgroundSize:'cover'}}>
          <header className="Login-header">
          <Card style={{maxWidth:'450px'}}>
            <CardImg top style={{width:'100%'}} src={bgheader}></CardImg>
            <CardBody className="login-card-body" style={{paddingBottom:"0"}}>
                <Form> 
                  <FormGroup row>
                      <Col md={3}><Label for="username" style={{color:"black", fontSize:"1.2rem", fontWeight:"bold"}}>Username</Label></Col>
                      <Col><Input type="text" name="username" id="username" placeholder="ชื่อผู้ใช้" /></Col>
                  </FormGroup>
                  <FormGroup row>
                      <Col md={3}><Label for="password" style={{color:"black", fontSize:"1.2rem", fontWeight:"bold"}}>Password</Label></Col>
                      <Col><Input type="password" name="password" id="password" placeholder="รหัสผ่าน" /></Col>
                  </FormGroup>
                </Form>
            </CardBody>
            <CardFooter style={{paddingTop:"1"}} className="row mx-0">
                <Col sm={6} style={{textAlign: 'center'}}><Button color="primary" style={{width:'100%'}}>Login</Button></Col>
                <Col sm={6} style={{textAlign: 'center'}}><Button style={{width:'100%', backgroundColor:"#D54FD5"}}>Dashboard</Button></Col>
              </CardFooter>
          </Card>
          </header>
        </div>
    );
  }
}

export default Login;