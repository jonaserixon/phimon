import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface IChartProps {
    pokemon: any[];
}

class Chart extends React.Component<IChartProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <BarChart width={800} height={300} data={this.getPokemonArray()}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey='name'/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                {this.getBars()}
            </BarChart>
        );
    }

    private getPokemonArray = () => {
        const allowedProperties = ['hp', 'atk', 'spatk', 'spdef', 'def', 'speed', 'pkmnname'];
        const arr: any = [];
        this.props.pokemon.forEach((pokemon) => {            
            for (const property in pokemon) {
                if (pokemon.hasOwnProperty(property)) {
                    if (allowedProperties.includes(property) && property !== 'pkmnname' && arr.length < 6) {
                        arr.push({ name: property, [pokemon.pkmnname]: pokemon[property] })
                    }
                    for (const o of arr) {
                        const object = Object.keys(o);
                        if (!object.includes(pokemon.pkmnname) && o.name === property) {                            
                            o[pokemon.pkmnname] = pokemon[property];
                        }
                    }
                }
            }
        })
        return arr;
    }

    private getBars = () => {
        const colors = ['#2a2321', '#b42000', '#78716f', '#3d4859', '#e352cb'];
        return this.props.pokemon
        .map((pokemon, i) => 
            <Bar 
                key={i} 
                dataKey={pokemon.pkmnname} 
                fill={colors[i]}
            />
        )
    }
}

export default Chart;
