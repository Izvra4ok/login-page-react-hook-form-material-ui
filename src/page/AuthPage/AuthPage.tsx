import React from 'react';
import AuthForm from "../../components/AuthForm/AuthForm";
import "./AuthPage.css";


const AuthPage: React.FC = () => {
    return (
        <div className="auth-page">
            <AuthForm/>
        </div>
    );
};

export default AuthPage;