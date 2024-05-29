import profileImage from '../assets/images/homeimg1.jpg'; 
import '../css section/Profile.css';
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

  


export default function Profile(props) {
  const Auth=useAuth()

  const Navigate=useNavigate()

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    budget: {
      income: 5000,
      expenses: 3000,
      savings: 2000
    }
  };



  const handlelogout=()=>{
    Auth.logout()
    alert("log out sucsesfully !")
    Navigate("/")
  }

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="profile-info">
          <h3>Welcome "{Auth.user}"</h3>
          <p>Email: {Auth.email}</p>
          </div>
        </div>
        <div className="budget-details">
          <h2>Budget Details</h2>
          <p>Income: R.s{user.budget.income}</p>
          <p>Expenses: R.s{user.budget.expenses}</p>
          <p>Savings: R.s{user.budget.savings}</p>
        </div>
      </div>
      <button style={{backgroundColor:"red"}} onClick={handlelogout}>Log Out</button>
    </div>
  );
}
