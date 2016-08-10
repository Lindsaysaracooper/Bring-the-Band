import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from '../../../app/scripts/components/login';
import submitHandler from '../../../app/scripts/components/login';
import h1 from '../../../app/scripts/components/login';
import React from 'react';

describe('login component', function (){
  const login = shallow(<Login/>)
  // const login = shallow(<submitHandler/>)
  it('should exist', ()=>{
    expect(login).to.exist
  })
  it('should render the login title', () => {
    expect (login.find('.loginTxt')).to.have.length(1);
  })
  it('is submithandler a function', () => {
    expect(Login.prototype.submitHandler).to.be.a('function');
    // expect(login.submitHandler).to.be.a('function');
  })
  it('doesn\'t have authtoken',()=>{
    expect(login.state('authtoken')).to.equal(undefined);
  })
})
