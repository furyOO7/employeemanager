import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Button, Snackbar, TextField, Input, InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox, Chip } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import './CreateRoleFormComponent.css';
import { getRoleData, roleTag } from '../../api/getRoleData';
import  {addEmployeData}  from '../../api/addEmployeData';

// import './AddRoleFormComponent/AddRoleFormComponent.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
}));
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CreateEmpFormComponent = () => {
    
    const classes = useStyles();
    const theme = useTheme();
    const [name, setName] = useState('');
    const [personRoles, setPersonRoles] = React.useState([]);
    const [roleTags, setRoleTags] = useState([]);
    const [empcode, setEmpcode] = useState('');
    const [dob, setDob] = useState(new Date());
    const [experience, setExperience] = useState('0');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [open, setOpen] = React.useState(false);

    const showSuccessMsg = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleFromDateChange = (date) => {
        let modifiedDate = new Date(date);
        setFromDate(modifiedDate.toDateString());
    };

    const handleToDateChange = (date) => {
        let modifiedDate = new Date(date);
        setToDate(modifiedDate.toDateString());
    };
    const handledobChange = (date) => {
        let modifiedDate = new Date(date);
        setDob(modifiedDate.toDateString());
    };
    const onCodeChangeOnhandler = (e) => {
        setEmpcode(e.target.value);
    }
    const onNameChangeHandler = (e) => {
        setName(e.target.value);
    }
    const onexpChangeHandler = (e) => {
        setExperience(e.target.value);
    }

    const handleMultpileChange = (e) => {
        setPersonRoles(e.target.value)
    }

    const onSubmitHandler = async () => {
        let postObj = {
            "name": name,
            "personRoles": personRoles,
            "empcode": empcode,
            "dob": dob,
            "experience":experience,
            "from": fromDate,
            "to": toDate
        }
    console.log(postObj)
        const result = await addEmployeData(postObj);
        if (result.status === 201) {
            showSuccessMsg();
        }
    }
    useEffect(() => {
        const fetchTag = async () => {
            const tags = await getRoleData();
            // console.log(tags);
            setRoleTags(tags);
        }
        fetchTag();
    }, [])

    return (
        <Container fluid={true}>
            <Row>
                <Col lg={2}>
                </Col>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Employee Added Successfully
                </Alert>
                </Snackbar>
                <Col lg={8}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            onChange={onNameChangeHandler}
                            id="standard-basic"
                            label="Name"
                            value={name}
                            required
                            
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-chip-label">Roles</InputLabel>
                            <Select
                                labelId="demo-mutiple-chip-label"
                                id="demo-mutiple-chip"
                                multiple
                                value={personRoles}
                                onChange={handleMultpileChange}
                                input={<Input id="select-multiple-chip" />}
                                renderValue={(selected) => (
                                    <div className={classes.chips}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                    </div>
                                )}
                                required
                            >
                                {roleTags.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personRoles, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField id="standard-basic" label="Code" required
                            onChange={onCodeChangeOnhandler}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    required
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date Of Birth"
                                    value={dob}
                                    onChange={handledobChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <TextField id="standard-basic" label="Exp" required
                            onChange={onexpChangeHandler}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    required
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date Of Joining"
                                    value={fromDate}
                                    onChange={handleFromDateChange}
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
                                    label="Relieving Date"
                                    value={toDate}
                                    onChange={handleToDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <Button variant="contained" color="primary" onClick={onSubmitHandler}>
                            Add
                        </Button>
                    </form>
                </Col>
                <Col lg={2}>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateEmpFormComponent;
