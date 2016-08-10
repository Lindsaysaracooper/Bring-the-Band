import { expect } from 'chai';
import { shallow } from 'enzyme';
import searchModel from '../../../app/scripts/models/searchModel';


describe('search Model should exist', function (){
  it('should exist', ()=>{
    expect(searchModel).to.exist
  })
  it ('should have a name property', ()=>{
    expect(searchModel).to.have.property('name');
    })

  })
