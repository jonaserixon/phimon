import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import ReactSixteenAdapter  from 'enzyme-adapter-react-16';
import * as sinon from 'sinon';

import FilterBar from '../components/FilterBar';
 
Enzyme.configure({ adapter: new ReactSixteenAdapter () });
describe('FilterBar component', () => {
    it('should have an empty selected type', () => {
        const filterbar = mount(<FilterBar submitFilter={sinon.spy()} />);
        expect(filterbar.instance().state.selectType).toBe('');
    });

    it('should have a fire as the selected type', () => {
        const filterbar = mount(<FilterBar submitFilter={sinon.spy()} />);
        filterbar.instance().handleTypeChange({target: {value: 'fire'}});
        expect(filterbar.instance().state.selectType).toBe('fire');
    });
});
