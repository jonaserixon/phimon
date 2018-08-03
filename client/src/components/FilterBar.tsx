import * as React from 'react';
import * as qs from 'qs';
import { FilterOptions, SortOptions } from './FilterOptions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

interface IFilterBarProps {
    submitFilter(input: string): void;
}

interface IFilterBarState {
    selectType: string, 
    sortType: string
}

class FilterBar extends React.Component<IFilterBarProps, IFilterBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectType: '',
            sortType: ''
        };
    }

    public render() {
        return (
            <div className="FilterBar">

                <form onSubmit={this.handleSubmit}>
                    <FilterOptions selectType={this.state.selectType} handleTypeChange={this.handleTypeChange} />
                    <SortOptions sortType={this.state.sortType} handleSortChange={this.handleSortChange} />
                    <Button variant="contained" color="primary" type='submit'>Filter</Button>
                </form>
                <br />
                <Divider />
            </div>
        );
    }

    private handleSortChange = (event: any): void => {
        this.setState({sortType: event.target.value});
    }

    private handleTypeChange = (event: any): void => {
        this.setState({selectType: event.target.value});
    }

    private handleSubmit = (event: any): void => {
        event.preventDefault();
        if (this.state.selectType === '' || this.state.sortType === '') {
            // Dispatcha till en global flash message grej
            console.log('Empty filtering fields!');
            return;
        }
        const queryString = qs.stringify({'type': this.state.selectType, 'sort': this.state.sortType});
        this.props.submitFilter('/api/filter?' + queryString);
    }
}

export default FilterBar;
