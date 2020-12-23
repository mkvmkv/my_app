import React, { Component } from 'react';

import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Reg extends Component {

  constructor() {
    super();
    this.state = {
      EmployeeName: '',
      Email: '',
      Password: '',
      ConfirmPassword: ''
    }

    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.EmployeeName = this.EmployeeName.bind(this);
    this.Password = this.Password.bind(this);
    this.ConfirmPassword = this.ConfirmPassword.bind(this);
    this.register = this.register.bind(this);

  }


  Email(event) {
    this.setState({ Email: event.target.value })
  }
debugger;
  ConfirmPassword(event) {
    this.setState({ ConfirmPassword: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }

  EmployeeName(event) {
    this.setState({ EmployeeName: event.target.value })
  }
  register(event) {
    fetch('http://127.0.0.1:5000/api/users/register', {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
        'Referrer-Policy': 'origin'
      },
      body: JSON.stringify({
        name: this.state.EmployeeName,
        password: this.state.Password,
        email: this.state.Email,
        password2: this.state.ConfirmPassword
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        console.log("-------------",Result.Status);
        if (Result.Status === 'Success')
                this.props.history.push("/Dashboard");
        else
        console.log(Result.name);
        console.log(Result.email);
        console.log(Result.password);
        console.log(Result.password2);
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      })
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="" lg="" xl="">
              <Card className="mx-">
                <CardBody className="p-">
                  <Form>
                    <div class="row" className="mb- pageheading">
                      <div class="col-sm- btn btn-primary">
                        Sign Up
                        </div>
                    </div>
                    <InputGroup className="mb-">
                      <Input type="text"  onChange={this.EmployeeName} placeholder="Enter Employee Name" />
                    </InputGroup>
                    <InputGroup className="mb-">
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />
                    </InputGroup>
                    <InputGroup className="mb-">
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />
                    </InputGroup>       
                    <InputGroup className="mb-">
                      <Input type="password"  onChange={this.ConfirmPassword} placeholder="Confirm Password" />
                    </InputGroup>
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Reg;