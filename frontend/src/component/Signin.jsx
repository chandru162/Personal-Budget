import { useState } from 'react';
import '../css section/SignInForm.css';
import Axios from 'axios'


const Signin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Corrected Axios post URL and data structure
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
                <button type="submit">Sign Up Now</button>
            </form>
        </div>
    );
};

export default Signin;


 