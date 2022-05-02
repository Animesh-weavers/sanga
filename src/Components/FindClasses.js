import React, { useContext } from 'react';
import AuthContext from '../Auth/auth-context';
import { useNavigate } from 'react-router-dom';

const FindClasses = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const freeTrialClickHandler = () => {
    if (authCtx.isLoggedIn) {
      navigate({ pathname: '/joinasteacher' }, { replace: false });
    } else {
      navigate({ pathname: '/login' }, { replace: false });
    }
  }
  return (
    <>
      <div style={{ width: '100%', height: '65vh', background: 'grey', textAlign: 'center' }}>
        <h1>Unleash their</h1>
        <h1>Creativity</h1>
        <br />
        <h3>Live Classes for kids 4 - 10 year.</h3>
        <h3>Arts,Dance,Yoga,Singing,Drama,Spanish,Hindi and more...</h3>
        <button onClick={freeTrialClickHandler} style={{ border: 'none', backgroundColor: '#2C989E', color: 'white' }}>Start Free Trial</button>
      </div>
    </>
  )
}

export default FindClasses