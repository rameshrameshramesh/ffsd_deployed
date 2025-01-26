// useSignup.js
import { message } from 'antd';
import { useAuth } from "../contexts/AuthContext.jsx";
import { useState } from 'react';

const useLogin = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const loginUser = async (values) => {
        try {
            setError(null);
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await res.json();
            if (res.status === 200) {
                message.success(data.message);
                login(data.token, data.user);
            } else if (res.status === 404) {
                setError(data.message);
            } else {
                message.error('Registration Failed');
            }
        } catch (error) {
            message.error('An error occurred while registering');
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, loginUser };
};

export default useLogin;
