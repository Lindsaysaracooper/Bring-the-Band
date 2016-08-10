import { expect } from 'chai';
import { shallow } from 'enzyme';
import store from '../../app/scripts/store';


describe('store module', function (){
  it ('should exist', ()=> {
    expect (store).to.exist
  });

  it ('should have a session property', ()=>{
    expect(store).to.have.property('session');
    })
    it ('should have a searchBands property', ()=>{
      expect(store).to.have.property('searchBands');
      })
      it ('should have a votes property', ()=>{
        expect(store).to.have.property('votes');
        })
  });
