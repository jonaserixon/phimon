import * as React from 'react';

interface IChartProps {
    pokemon: any;
}

class Chart extends React.Component<IChartProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="Chart">
                <h1>A Chart Displaying Stats</h1>
            </div>
        );
    }
}

export default Chart;
