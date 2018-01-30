/* eslint-disable max-nested-callbacks */
import React from 'react';
import renderer from 'react-test-renderer';

import {Container} from './container';

describe('Container for ColorSwitcher', () => {
    it('should renders if children count more then 12', () => {
        const component = (
            <Container>
                {
                    Array.from(new Array(14), (el, i) => <div key={i}>{`color ${i + 1}`}</div>)
                }
            </Container>
        );

        expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('shouldn\'t renders only children if children count less then 13', () => {
        const component = (
            <Container>
                {
                    Array.from(new Array(12), (el, i) => <div key={i}>{`color ${i + 1}`}</div>)
                }
            </Container>
        );

        expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });
});
