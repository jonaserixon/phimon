import * as React from 'react';
import Chart from './Chart';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

const DeleteIcon = () => {
    return (
        <SvgIcon>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
    )
}

interface IComparePageProps {
    pokemon: any[],
    clearPokemonData(event: any): void
}

class ComparePage extends React.Component<IComparePageProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className='ComparePage'>
                <Chart pokemon={this.props.pokemon} />
                <Button variant="contained" color="secondary" onClick={this.props.clearPokemonData}>
                    <DeleteIcon />
                    Clear Selected Pokémon
                </Button>
            </div>
        );
    }

}

export default ComparePage;
