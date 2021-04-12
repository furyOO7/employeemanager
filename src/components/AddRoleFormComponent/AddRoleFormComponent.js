import React,{use} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


import './AddRoleFormComponent.css';

const AddRoleFormComponent = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return (

        <Container fluid={true}>
            <Row>
                <Col lg={2}>
                </Col>

                <Col lg={8}>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Role Id</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Role Name</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="From"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                        </Grid>
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="To"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                        </Grid>
                        </MuiPickersUtilsProvider>
                        <Col lg={2}>
                        </Col>
            </Row>
        </Container>


                );
            }
            
            export default AddRoleFormComponent;
