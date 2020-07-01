import React from 'react';
import styled from 'styled-components';

import { Direction } from './definitions/Direction';

/**
 * Properties of the timeline component
 */
interface ITimelineProps {
    direction: Direction;
}

/**
 * The styled component for the timeline component
 */
const StyledTimeline = styled.div<ITimelineProps>`
    display: flex;
    flex-direction: ${props => props.direction === Direction.Horizontal ? 'row' : 'column'};
`;

/**
 * The timeline component
 *
 * @param props The properties of the timeline component
 * @constructor
 */
export const Timeline: React.FC<ITimelineProps> = (props) => {
    return <StyledTimeline {...props} className={'timeline'}>
        {props.children}
    </StyledTimeline>;
};
