import React, { useEffect, useState } from 'react';

import { RegisterForm } from 'style/RegisterStyle';

const Register = () => {
  const [values, setValues] = useState({
    Num: '',
    Name: '',
    Artist: '',
  });
  const [isAble, setIsAble] = useState(false);

  useEffect(() => {
    values['Num'] && values['Name'] && values['Artist'] ? setIsAble(true) : setIsAble(false);
  }, [values]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(values['Artist'], values['Name'], values['Num']);
    console.log(values);
  };

  return (
    <RegisterForm onSubmit={handleRegister}>
      <label>
        Number
        <input name="Num" type="number" value={values.Num} onChange={handleChange} />
      </label>
      <label>
        Name
        <input name="Name" value={values.Name} onChange={handleChange} />
      </label>
      <label>
        Artist
        <input name="Artist" value={values.Artist} onChange={handleChange} />
      </label>
      <button disabled={!isAble} type="submit">
        등록하기
      </button>
    </RegisterForm>
  );
};

export default Register;
