// @flow
import React, {PureComponent, Fragment, type Node} from 'react';
import classNames from 'classnames';

import s from './container.scss';

type PropsType = { children: Node };
type StateType = { collapsed: boolean };

/**
 * Container helper for ColorSwitcher
 */
export class Container extends PureComponent<PropsType, StateType> {
    static defaultProps = {children: []};

    state = {collapsed: true};

    /**
     * Toggle collapsed state
     */
    toggleContainer = () => { this.setState((state: StateType): StateType => ({collapsed: !state.collapsed})) };

    /**
     * Render component
     * @return {Node} component
     */
    render(): Node {
        const {children} = this.props;
        const {collapsed} = this.state;

        if (children.length > 12) {
            return (
                <div className={s.wrapper}>
                    {collapsed ? children.slice(0, 10) : children}
                    <button
                        className={classNames(s.link, {[s.active]: !collapsed})}
                        onClick={this.toggleContainer}
                    >
                        See {collapsed ? 'More' : 'Less'}
                    </button>
                </div>
            )
        }

        return (
            <Fragment>
                {children}
            </Fragment>
        )
    }
}
