import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface IChartProps {
    pokemon: any;
}

class Chart extends React.Component<IChartProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        console.log(this.props.pokemon);
        const barSize = 10;
        const x = this.props.pokemon;
        const arr = [
            {name: 'base_stats', [x.pkmnname]: (x.hp+x.atk+x.spatk+x.spdef+x.speed), pkmn2: (x.hp+x.atk+x.spatk+x.spdef)},
            {name: 'hp', [x.pkmnname]: x.hp, pkmn2: 30}, 
            {name: 'atk', [x.pkmnname]: x.atk, pkmn2: 50}, 
            {name: 'spAtk', [x.pkmnname]: x.spatk, pkmn2: 80}, 
            {name: 'spDef', [x.pkmnname]: x.spdef, pkmn2: 60}, 
            {name: 'speed', [x.pkmnname]: x.speed, pkmn2: 30}, 
            {name: 'weight', [x.pkmnname]: x.weight, pkmn2: x.weight}, 
            {name: 'height', [x.pkmnname]: x.height, pkmn2: x.height }
        ]
        return (
            <BarChart width={800} height={300} data={arr}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey='name'/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey={x.pkmnname} fill="#8884d8" barSize={barSize} />
                {/* <Bar dataKey="pkmn2" fill="#82ca9d" barSize={barSize} /> */}
            </BarChart>
        );
    }
}

export default Chart;
