export const login = (user) => (
  fetch('http://localhost:5000/api/auth/login', {
    method: 'post',
    headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

    },
    body: JSON.stringify(user)
  })
);

export const signup = (user) => (
  fetch('http://localhost:5000/api/auth/signup', {
    method: 'post',
    headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

    },
    body: JSON.stringify(user)
  })
);
