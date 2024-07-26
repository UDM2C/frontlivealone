import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import base64 from 'base-64';

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('accessToken', token);

      const payload = token.split('.')[1];
      const decodedPayload = base64.decode(payload);

      const textDecoder = new TextDecoder('utf-8');
      const decodedArray = new Uint8Array([...decodedPayload].map(char => char.charCodeAt(0)));
      const jsonPayload = textDecoder.decode(decodedArray);

      const parsedPayload = JSON.parse(jsonPayload);

      localStorage.setItem('nickName',parsedPayload.nickname);

      navigate('/');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default OAuth2RedirectHandler;
