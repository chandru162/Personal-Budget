import { useState } from 'react';
import '../css section/SignInForm.css';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Signin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const Navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const formdata={
            name: name,
            email: email,
            password: password

        }
        Axios.post('http://localhost:3005/userdetails/post', formdata)
        .then(res => {
            console.log(res)
            alert(`Sign in successfully! Welcome ${name}`);
        })
        Navigate('/log-in')
        .catch(err => {
            console.log(err);
            alert('Failed to sign in. Please try again.');
        });
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <br />
                <h6>Welcome !</h6>
                <div className="form-group">
                    <label htmlFor="text">Name:</label>
                    <input
                        type="text"
                        id="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign in Now</button>
            </form>
        </div>
    );
};

export default Signin;


 