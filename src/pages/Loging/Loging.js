import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import "./Loging.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Loging() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate = useNavigate();


  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {

      fetch("http://localhost:8082/user/name/" + username).then((res) => {
        return res.json();
      }).then((resp) => {
        // console.log(resp)

        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter valid username');
        } else {
          if (resp.password === password) {
            toast.success('Loging Successfully............');
            sessionStorage.setItem('username', username);
            usenavigate("/view");
          } else {
            toast.error('Please Enter valid credentials');
          }
        }
      }).catch((err) => {
        toast.error('Login Failed due to :' + err.message);
      });
      
    }
  }

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.error('Please Enter Username');

    }
    if (password === '' || password === null) {
      result = false;
      toast.error('Please Enter Password');
    }
    return result;
  }
  return (
    <div className='contenn'>
      <MDBContainer style={{ width: '30%' }} className="p-3 my-5 d-flex flex-column ">

        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={justifyActive === 'tab1'}>

            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '100%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon animate='flip' fab icon='facebook-f' size="2x" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon width='50px' animate='bounce' fab icon='twitter' size="2x" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon animate='pulse' fab icon='google' size="2x" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon animate='shake' fab icon='github' size="2x" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput value={username} onChange={e => usernameupdate(e.target.value)} wrapperClass='mb-4' label='User Name' id='form1' type='email' />
            <MDBInput value={password} onChange={e => passwordupdate(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>
            <MDBBtn onClick={ProceedLogin} className="mb-4 w-100 " >Sign in</MDBBtn>
            <p className="text-center">Not a member? <a href="#!">Register</a></p>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>

            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
            </div>


            <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

          </MDBTabsPane>

        </MDBTabsContent>

      </MDBContainer>
    </div>
  );

}

export default Loging;