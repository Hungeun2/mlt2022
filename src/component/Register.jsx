import React, { useState } from 'react';

const Register = () => {
  const [values, setValues] = useState({
    Num: '',
    Name: '',
    Artist: '',
  });

  const handleChange = (e) => {
    console.log('change');
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleRegister}>
      <label forhtml="number">Number : </label>
      <input name="Num" id="number" maxLength={8} value={values.Num} onChange={handleChange} />
      <label forhtml="name">Name : </label>
      <input name="Name" id="name" value={values.Name} onChange={handleChange} />
      <label forhtml="artist">Artist : </label>
      <input name="Artist" id="artist" value={values.Artist} onChange={handleChange} />
      <button type="submit">등록하기</button>
    </form>
  );
};

export default Register;
