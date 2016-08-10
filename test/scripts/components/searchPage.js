import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import SearchPage from '../../../app/scripts/components/searchPage';


describe('searchPagecomponent', function (){
  const searchPage = shallow(<SearchPage/>)
  // const login = shallow(<submitHandler/>)
  it('should exist', ()=>{
    expect(searchPage).to.exist
  })
  it('should be an empty array', ()=>{
    expect(this.bands).to.have.length(0);


  })
})

// if there are bands show lis
// by default i expect no modalbut if i change showmodal to true i can show modal
// make sure there is an li on the page
// .simulate('click') after expect modal to be true
