import React, { Component } from 'react';

import '../App.css';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {

    constructor() {

        super();


        this.state = {

            Email: '',

            Password: ''

        }


        this.Password = this.Password.bind(this);

        this.Email = this.Email.bind(this);

        this.login = this.login.bind(this);

    }


    Email(event) {

        this.setState({ Email: event.target.value })

    }

    Password(event) {

        this.setState({ Password: event.target.value })

    }

    login(event) {
        fetch('http://127.0.0.1:5000/api/users/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                 Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status === 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
    }
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="" lg="" xl="">
                            <CardGroup>
                                <Card className="p-">
                                    <CardBody>
                                        <Form>
                                            <div class="row" className="mb- pageheading">
                                                <div class="col-sm- btn btn-primary">
                                                    Login
                             </div>
                                            </div>
                                            <InputGroup className="mb-">
                                                <Input type="text" onChange={this.Email} placeholder="Enter Email" />
                                            </InputGroup>
                                            <InputGroup className="mb-">
                                                <Input type="password" onChange={this.Password} placeholder="Enter Password" />
                                            </InputGroup>

                                            <Button onClick={this.login} color="success" block>Login</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Login;