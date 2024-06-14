import { Button, Input } from 'antd';
import React, { useReducer } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
  age: null,
  address: {
    country: '',
    city: '',
  },
  phones: ["+998999999", "+99899000000"],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SET_COUNTRY':
      return { ...state, address: { ...state.address, country: action.payload } };
    case 'SET_CITY':
      return { ...state, address: { ...state.address, city: action.payload } };
    case 'ADD_PHONE':
      return { ...state, phones: [...state.phones, action.payload] };
    case 'REMOVE_PHONE':
      return { ...state, phones: state.phones.filter((phone, index) => index !== action.payload) };
    default:
      return state;
  }
}

const RegisterForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <form className='flex flex-col gap-2 w-1/2' onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <Input
          type="text"
          value={state.username}
          onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
        />
      </div>

      <div>
        <label>Email</label>
        <Input
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        />
      </div>

      <div>
        <label>Password</label>
        <Input
          type="password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        />
      </div>

      <div>
        <label>Age</label>
        <Input
          type="number"
          value={state.age}
          onChange={(e) => dispatch({ type: 'SET_AGE', payload: parseInt(e.target.value) })}
        />
      </div>

      <div>
        <label>Country</label>
        <Input
          type="text"
          value={state.address.country}
          onChange={(e) => dispatch({ type: 'SET_COUNTRY', payload: e.target.value })}
        />
      </div>

      <div>
        <label>City</label>
        <Input
          type="text"
          value={state.address.city}
          onChange={(e) => dispatch({ type: 'SET_CITY', payload: e.target.value })}
        />
      </div>

      <div>
        <label>Phones</label>
        {state.phones.map((phone, index) => (
          <div key={index}>
            <Input type="text" value={phone} readOnly />
            <Button className='m-2' onClick={() => dispatch({ type: 'REMOVE_PHONE', payload: index })}>
              Remove
            </Button>
          </div>
        ))}
        <Button type="primary" onClick={() => dispatch({ type: 'ADD_PHONE', payload: '' })}>
          Add Phone
        </Button>
      </div>

      <Button type="primary">Register</Button>
    </form>
  );
};

export default RegisterForm;
