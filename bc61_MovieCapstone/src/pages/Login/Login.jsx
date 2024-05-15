import React from 'react';
import Lottie from 'lottie-react';
import loginAnimation from './../../assets/Animation/Animation - 1713347363841.json';
import FormLogin from '../../components/Form/FormLogin';

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      {/* animation */}
      <div>
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
      {/* form */}
      <div>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
