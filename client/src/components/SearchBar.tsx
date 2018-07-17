import * as React from 'react';

export interface ISearchBar {
	onClick(client: any): void;
}

class SearchBar extends React.Component<ISearchBar, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='search' />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    private handleChange(event: any): void {
        this.setState({value: event.target.value});
    }

    private handleSubmit(event: any): void {
        event.preventDefault();
        this.props.onClick(this.state.value);
    }
}

export default SearchBar;
