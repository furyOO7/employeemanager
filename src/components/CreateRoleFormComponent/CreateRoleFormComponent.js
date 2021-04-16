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
import './CreateRoleFormComponent.css';
import { getRoleData, roleTag } from '../../api/getRoleData';
// import clsx from 'clsx';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const CreateEmployeFormComponent = () => {
    const classes = useStyles();

    const [fromDate, setFromDate] = useState(new Date('2014-08-18T21:11:54'));
    const [toDate, setToDate] = useState(new Date('2014-08-18T21:11:54'));
    const [key, setKey] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [personRoles, setPersonRoles] = React.useState([]);
    const [roleTags, setRoleTags] = useState([]);

    const showSuccessMsg = () => {
        setOpen(true);
    };

    let names = ['asd', 'asde'];
    // const names = roleTag;
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

    const onKeyChangeOnhandler = (e) => {
        setKey(e.target.value);
    }
    const onNameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const onSubmitHandler = async () => {

    }

    const handleMultpileChange = (e) => {
        setPersonRoles(e.target.value)
    }

    useEffect(() => {
        const fetchTag = async () => {
            const tags = await getRoleData();
            console.log(tags);
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
                        Role Added Successfully
                </Alert>
                </Snackbar>
                <Col lg={8}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            onChange={(e) => onKeyChangeOnhandler(e)}
                            id="standard-basic"
                            label="Name"
                            value={key}
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
                            >
                                {roleTags.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personRoles, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField id="standard-basic" label="Code"
                            onChange={onNameChangeHandler}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date Of Birth"
                                    value={fromDate}
                                    onChange={handleFromDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <TextField id="standard-basic" label="Exp"
                            onChange={onNameChangeHandler}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
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

export default CreateEmployeFormComponent;
