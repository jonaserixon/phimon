import * as React from 'react';

export const FilterOptions = (props: any) => {
    return (
        <label>
            Filter 
            <select value={props.selectType} onChange={props.handleTypeChange}>
                <option>Choose a type</option>
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
            </select>
        </label>
    )
}

export const SortOptions = (props: any) => {
    return (
        <label>
            Sort 
            <select value={props.sortType} onChange={props.handleSortChange}>
                <option>Choose sorting</option>
                <option value='id'>pokedex id</option>
                <option value='pkmnname'>name</option>
                <option value='hp'>HP</option>
                <option value='atk'>ATK</option>
                <option value='spAtk'>SPATK</option>
                <option value='spDef'>SPDEF</option>
                <option value='def'>DEF</option>
            </select>
        </label>
    )
}


