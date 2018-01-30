/* eslint-disable max-nested-callbacks */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Container} from './container';
import s from './container.scss';

configure({adapter: new Adapter()});

describe('Container for ColorSwitcher', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Container/>);
    });

    describe('toggleContainer method', () => {
        it('should toggle state', () => {
            wrapper.setState({collapsed: true});
            expect(wrapper.state('collapsed')).toBe(true);

            wrapper.instance().toggleContainer();
            expect(wrapper.state('collapsed')).toBe(false);
        })
    });

    describe('render', () => {
        beforeEach(() => {
            const children = Array.from(new Array(14), (el, i) => <div className="color" key={i}/>);
            wrapper.setProps({children})
        });

        it('should render only 10 children if container collapsed', () => {
            wrapper.setState({collapsed: true});
            expect(wrapper.find('.color').length).toBe(10);
        });

        it('should render all children if container not collapsed', () => {
            wrapper.setState({collapsed: false});
            expect(wrapper.find('.color').length).toBe(14);
        });

        it('should render button with text "See More" if container collapsed', () => {
            wrapper.setState({collapsed: true});
            expect(wrapper.find(`.${s.link}`).text()).toBe('See More');
        });

        it('should render button with text "See Less" if container not collapsed', () => {
            wrapper.setState({collapsed: false});
            expect(wrapper.find(`.${s.link}`).text()).toBe('See Less');
        });
    })
});
