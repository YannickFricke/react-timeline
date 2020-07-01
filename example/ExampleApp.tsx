import React from 'react';
import { Timeline } from '../src';
import { Direction } from '../src/definitions/Direction';

export const ExampleApp: React.FC = () => {
    return <div>
        <Timeline direction={Direction.Vertical}>
            <div>test</div>
            <div>test 1</div>
        </Timeline>
    </div>;
};
