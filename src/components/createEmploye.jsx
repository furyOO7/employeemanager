// import React, { useState } from 'react';
// import { Col, Container, Row } from 'reactstrap';
// import { Button, Snackbar } from '@material-ui/core';
// import MuiAlert from '@material-ui/lab/Alert';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';

// import addRolesData from '../api/addRolesData';

// import './AddRoleFormComponent/AddRoleFormComponent.css';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center"
//     },
// }));

// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const CreateEmploye = () => {
//     const classes = useStyles();

//     const [fromDate, setFromDate] = useState(new Date('2014-08-18T21:11:54'));
//     const [toDate, setToDate] = useState(new Date('2014-08-18T21:11:54'));
//     const [key, setKey] = useState('');
//     const [name, setName] = useState('');
//     const [open, setOpen] = React.useState(false);

//     const showSuccessMsg = () => {
//         setOpen(true);
//     };

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpen(false);
//     };


//     const handleFromDateChange = (date) => {
//         let modifiedDate = new Date(date);
//         setFromDate(modifiedDate.toDateString());
//     };

//     const handleToDateChange = (date) => {
//         let modifiedDate = new Date(date);
//         setToDate(modifiedDate.toDateString());
//     };

//     const onKeyChangeOnhandler = (e) => {
//         setKey(e.target.value);
//     }
//     const onNameChangeHandler = (e) => {
//         setName(e.target.value);
//     }

//     const onSubmitHandler = async () => {
//         console.log(key, name, toDate, fromDate, 'oooo');
//         let postObj = {
//             "roleKey": key,
//             "roleName": name,
//             "from": fromDate,
//             "to": toDate
//         }
//         const result = await addRolesData(postObj);
//         if (result.status === 201) {
//             showSuccessMsg();
//         }
//     }

//     return (
//         <Container fluid={true}>
//             <Row>
//                 <Col lg={2}>
//                 </Col>
//                 <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
//                     <Alert onClose={handleClose} severity="success">
//                         Role Added Successfully
//                 </Alert>
//                 </Snackbar>
//                 <Col lg={8}>
//                     <form

//                         className={classes.root} noValidate autoComplete="off">
//                         <TextField
//                             onChange={(e) => onKeyChangeOnhandler(e)}
//                             id="standard-basic"
//                             label="Name"
//                             value={key}
//                         />

//                         <TextField id="standard-basic" label="Roles"
//                             onChange={onNameChangeHandler}
//                         />
//                          <TextField id="standard-basic" label="Code"
//                             onChange={onNameChangeHandler}
//                         />
//                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                             <Grid container justify="space-around">
//                                 <KeyboardDatePicker
//                                     disableToolbar
//                                     variant="inline"
//                                     format="MM/dd/yyyy"
//                                     margin="normal"
//                                     id="date-picker-inline"
//                                     label="From"
//                                     value={fromDate}
//                                     onChange={handleFromDateChange}
//                                     KeyboardButtonProps={{
//                                         'aria-label': 'change date'
//                                     }}
//                                 />
//                             </Grid>
//                         </MuiPickersUtilsProvider>
//                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                             <Grid container justify="space-around">
//                                 <KeyboardDatePicker
//                                     disableToolbar
//                                     variant="inline"
//                                     format="MM/dd/yyyy"
//                                     margin="normal"
//                                     id="date-picker-inline"
//                                     label="From"
//                                     value={fromDate}
//                                     onChange={handleFromDateChange}
//                                     KeyboardButtonProps={{
//                                         'aria-label': 'change date'
//                                     }}
//                                 />
//                             </Grid>
//                         </MuiPickersUtilsProvider>
//                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                             <Grid container justify="space-around">
//                                 <KeyboardDatePicker
//                                     disableToolbar
//                                     variant="inline"
//                                     format="MM/dd/yyyy"
//                                     margin="normal"
//                                     id="To"
//                                     label="To"
//                                     value={toDate}
//                                     onChange={handleToDateChange}
//                                     KeyboardButtonProps={{
//                                         'aria-label': 'change date'
//                                     }}
//                                 />
//                             </Grid>
//                         </MuiPickersUtilsProvider>
//                         <Button variant="contained" color="primary" onClick={onSubmitHandler}>
//                             Add
//                         </Button>
//                     </form>
//                 </Col>
//                 <Col lg={2}>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default CreateEmploye;
