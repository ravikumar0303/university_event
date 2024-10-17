

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds
// // const SESSION_TIMEOUT = 2 * 60 * 1000;
// function Protected({ Component }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const login = localStorage.getItem('login');
//     const loginTime = localStorage.getItem('loginTime');
//     const currentTime = new Date().getTime();

//     if (!login || !loginTime || (currentTime - loginTime > SESSION_TIMEOUT)) {
//       // If not logged in or session expired, redirect to login page
//       localStorage.removeItem('login');
//       localStorage.removeItem('loginTime');
//       navigate('/login');
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <Component />
//     </div>
//   );
// }

// export default Protected;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SESSION_TIMEOUT = 60 * 60 * 1000; // 5 minutes in milliseconds

function Protected({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('login');
    const loginTime = localStorage.getItem('loginTime');
    const currentTime = new Date().getTime();

    if (!login || !loginTime || (currentTime - loginTime > SESSION_TIMEOUT)) {
      // If not logged in or session expired, redirect to login page
      localStorage.removeItem('login');       // Clear login status
      localStorage.removeItem('loginTime');   // Clear login time
      alert('Session expired, please log in again.');
      navigate('/login');                     // Redirect to login page
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
