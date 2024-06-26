import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { Button, Input } from 'antd';

const schema = Joi.object({
  firstname: Joi.string().min(3).max(30).required().label('First Name'),
  lastname: Joi.string().min(3).max(30).required().label('Last Name'),
  email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
  password: Joi.string().min(8).required().label('Password'),
  phone: Joi.string().pattern(/^[0-9]{10,15}$/).required().label('Phone'),
  address: Joi.string().min(5).max(100).required().label('Address'),
  age: Joi.number().integer().min(18).max(100).required().label('Age'),
});

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='w-1/2' >
      <div>
        <label>First Name</label>
        <Input {...register('firstname')} />
        {errors.firstname && <p>{errors.firstname.message}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <Input {...register('lastname')} />
        {errors.lastname && <p>{errors.lastname.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <Input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <Input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Phone</label>
        <Input {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label>Address</label>
        <Input {...register('address')} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <Input type="number" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <Button onClick={handleSubmit(onSubmit)} className='w-full mt-2 border' type="submit">Register</Button>
    </form>
  );
};

export default RegisterPage;
