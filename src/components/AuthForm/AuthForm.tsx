import React from 'react';
import {Button, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import {useForm, Controller, SubmitHandler, useFormState} from "react-hook-form";
import {loginValidation, passwordValidation} from "./validation";
import "./AuthForm.css";


interface ISignInForm {
    login: string,
    password: string,
}

const AuthForm: React.FC = () => {

    const {handleSubmit, control} = useForm<ISignInForm>();
    const {errors} = useFormState({
        control
    });


    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        console.log(data)
    };

    return (
        <div className="auth-form">
            <Typography variant="h4" gutterBottom={true}>
                Login
            </Typography>

            <Typography variant="subtitle1" gutterBottom={true} className="auth-form__subtitle">
                to get access
            </Typography>

            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller name="login"
                            control={control}
                            rules={loginValidation}
                            render={({field: {onChange}, fieldState, formState,}) => (
                                <TextField
                                    color="success"
                                    error={!!errors.login?.message}
                                    label="Login"
                                    size="small"
                                    margin="normal"
                                    className="auth-form__input"
                                    fullWidth={true}
                                    onChange={onChange}
                                    // value={field.value || ""} {"" || field:{onChange} fix uncontrolled input
                                    helperText={errors.login?.message}
                                />
                            )}/>

                <Controller name="password"
                            control={control}
                            rules={passwordValidation}
                            render={({field:{onChange}, fieldState, formState,}) => (
                                <TextField
                                    color="success"
                                    error={!!errors.password?.message}
                                    label="Password"
                                    type="password"
                                    size="small"
                                    margin="normal"
                                    className="auth-form__input"
                                    fullWidth={true}
                                    onChange={onChange}
                                    // value={field.value || ""} {"" || field:{onChange} fix uncontrolled input
                                    helperText={errors.password?.message}
                                />
                            )}/>

                <Button type={"submit"}
                        variant="contained"
                        fullWidth={true}
                        sx={{
                            marginTop: 3
                        }}>
                    Submit
                </Button>

            </form>
        </div>
    )
        ;
};

export default AuthForm