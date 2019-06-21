import React from 'react';
import { shallow } from 'enzyme';
import SearchCriteria from "../components/SearchCriteria";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('render without crashing', () => {
    const appWrapper = shallow(<SearchCriteria />);
});