import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { RegisterForm } from 'style/RegisterStyle';

const API = process.env.REACT_APP_END_POINT + 'register';

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

  const handleRegister = async (e) => {
    e.preventDefault();
    const body = {
      Num: Number(values['Num']),
      Name: values['Name'],
      Artist: values['Artist'],
    };
    if (body.Num.toString().length === 8) {
      try {
        const res = await axios.post(API, body);
        if (res.data === 'success') {
          alert('등록되었습니다.');
          setValues({ Num: '', Name: '', Artist: '' });
        } else {
          alert('이미 등록되어 있는 곡입니다.');
          console.log(res);
        }
      } catch (err) {
        console.error('Error : ', err);
      }
    } else {
      alert('Number를 확인하세요');
    }
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
