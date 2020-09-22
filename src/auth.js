export function getAuthForm() {
  return `
      <form class="mui-form" id="auth-form">
        <div class="mui-textfield mui-textfield--float-label">
          <input type="email" id="email" required value="admin@email.com">
          <label for="email">Email</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
          <input type="password" id="password" required value="123456">
          <label for="password">Password</label>
        </div>
        <button
            type="submit"
            class="mui-btn mui-btn--raised mui-btn--primary">Sign In</button>
      </form>
  `
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyC2SOjfsjj9V-axxGJosVwKlCXTGJOLOmA'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => data.idToken)
}
