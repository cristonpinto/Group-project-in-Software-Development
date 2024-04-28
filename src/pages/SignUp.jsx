import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-slate-700 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' style={styles.button}>Sign up</button>

      </form>
      <div className="login-options" style={styles.loginOptions}>
  <p style={styles.loginText}>Have an account?</p>
  <Link to={"/sign-in"} style={styles.signInLink}>Sign in</Link>
</div>
    </div>
  );
}
const styles = {
  loginOptions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px', // Add margin top to adjust the position
  },
  loginText: {
    color: '#fff',
    fontSize: '16px',
    marginRight: '10px',
  },
  signInLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.2s ease-in',
  },
  button: {
    width: '60%',
    height: '40px',
    margin: '10px auto',
    justifyContent: 'center',
    display: 'block',
    color: '#fff',
    background: '#573b8a',
    fontSize: '1em',
    fontWeight: 'bold',
    marginTop: '20px',
    outline: 'none',
    border: 'none',
    borderRadius: '5px',
    transition: '0.2s ease-in',
    cursor: 'pointer',
  },
};


