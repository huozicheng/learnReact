import React, {Component} from 'react'

export default class SearchBox extends Component {
    render() {

        return (
            <div>
                <label>
                    Search Product
                    <input type="text" onChange={this.props.onSearchChange}/>
                </label>
            </div>
        )
    }
}