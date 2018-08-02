import * as React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';


export const FilterOptions = (props: any) => {
    return (
        <InputLabel>
        Filter
            <Select
                native={true}
                value={props.selectType}
                onChange={props.handleTypeChange}
            >
                <option value="" />
                <option value='normal'>Normal</option>
                <option value='fighting'>Fighting</option>
                <option value='flying'>Flying</option>
                <option value='poison'>Poison</option>
                <option value='ground'>Ground</option>
                <option value='rock'>Rock</option>
                <option value='bug'>Bug</option>
                <option value='ghost'>Ghost</option>
                <option value='steel'>Steel</option>
                <option value='fire'>Fire</option>
                <option value='water'>Water</option>
                <option value='grass'>Grass</option>
                <option value='electric'>Electric</option>
                <option value='psychic'>Psychic</option>
                <option value='ice'>Ice</option>
                <option value='dragon'>Dragon</option>
                <option value='dark'>Dark</option>
                <option value='fairy'>Fairy</option>
            </Select>
        </InputLabel>
    )
}

export const SortOptions = (props: any) => {
    return (

        <InputLabel>
        Sort
            <Select
                native={true}
                value={props.sortType}
                onChange={props.handleSortChange}
            >
                <option value="" />
                <option value='id'>pokedex id</option>
                <option value='pkmnname'>name</option>
                <option value='hp'>HP</option>
                <option value='atk'>ATK</option>
                <option value='spAtk'>SPATK</option>
                <option value='spDef'>SPDEF</option>
                <option value='def'>DEF</option>
            </Select>
        </InputLabel>
    )
}


