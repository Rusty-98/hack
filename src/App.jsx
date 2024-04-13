import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const tokken = localStorage.getItem("tokken");
    if (!tokken) {
      // Token not found, handle accordingly
      navigate('/login');
      setLoading(false);
      return;
    }


    // Fetch user data from the API with token in headers
    axios.get('http://localhost:3000/user/getUser', {
      headers: {
        Authorization: `Bearer ${tokken}` // Include token in Authorization header
      }
    })
      .then(res => {
        setUser(res.data);
        localStorage.setItem("auth", true);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          // Token expired or invalid, navigate to login page
          navigate('/login');
        }
        setLoading(false);
      });
  }, [navigate]);

  return (
    <>
      <div className='bg-gray-800 text-white pt-[80px] w-full h-screen font-bold'>
        <h1>Hello</h1>
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <div>
            <h2>User Details:</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        ) : (
          <p>No user found</p>
        )}
      </div>
    </>
  );
}

export default App;
