import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange' // Enable validation on change
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate('/result', { state: data });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'below', height: '100vh' }}>
      <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '10px' }}>
        <h1>Login Credentials</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" {...register('firstName', { required: true })} />
            {errors.firstName && <p>Please enter your first name</p>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" {...register('lastName', { required: true })} />
            {errors.lastName && <p>Please enter your last name</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email', { required: true })} />
            {errors.email && <p>Please enter a valid email</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register('password', { required: true })} />
            {errors.password && <p>Please enter a password</p>}
          </div>
          <div>
            <label htmlFor="place">Place:</label>
            <input type="text" id="place" {...register('place', { required: true })} />
            {errors.place && <p>Please enter your place</p>}
          </div>
          <div style={{  backgroundcolor: 'green', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" disabled={!isValid}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
