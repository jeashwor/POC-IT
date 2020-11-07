import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Input, InputLabel, InputAdornment, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

function SignupForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const [open, setOpen] = React.useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    console.log(values);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                label="Username"
                id="username"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                value={values.username || ""}
                onChange={handleChange("username")}

            />
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                label="First Name"
                id="fname"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                value={values.fname || ""}
                onChange={handleChange("fname")}
            />
            <TextField
                label="Last Name"
                id="lname"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                value={values.lname || ""}
                onChange={handleChange("lname")}
            />
            <TextField
                id="date"
                label="Birthdate"
                type="date"
                className={clsx(classes.margin, classes.textField)}
                InputLabelProps={{
                    shrink: true,
                }}
                value={values.date || ""}
                onChange={handleChange("date")}
            />
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel id="role">Your Role</InputLabel>
                <Select
                    labelId="role"
                    id="role"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={values.role || ""}
                    onChange={handleChange("role")}
                >
                    <MenuItem value={"Patient"}>Patient/Patient CareTaker</MenuItem>
                    <MenuItem value={"Provider"}>Clinician/Provider</MenuItem>
                </Select>
            </FormControl>
        </form>
    )
}

export default SignupForm;
