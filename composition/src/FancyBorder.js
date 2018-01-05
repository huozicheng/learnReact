import React, {Component} from 'react'

export default class FancyBorder extends Component {
    render() {
        return (
            <div className="fancy-border" style={{backgroundColor: this.props.color}}>
                {this.props.children}
            </div>
        )
    }
}