import React, {Component} from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.value}</li>
        )
    }
}
