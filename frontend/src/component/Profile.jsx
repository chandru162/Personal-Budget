import profileImage from '../assets/images/homeimg1.jpg'; // Import the profile image
import '../css section/Profile.css';

export default function Profile() {
  // Sample user data (replace with actual user data fetched from backend)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    budget: {
      income: 5000,
      expenses: 3000,
      savings: 2000
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
          </div>
        </div>
        <div className="budget-details">
          <h2>Budget Details</h2>
          <p>Income: ${user.budget.income}</p>
          <p>Expenses: ${user.budget.expenses}</p>
          <p>Savings: ${user.budget.savings}</p>
        </div>
      </div>
      <button style={{backgroundColor:"red"}}>Log Out</button>
    </div>
  );
}
