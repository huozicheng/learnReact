import React, {Component} from 'react'

export default class SplitPanel extends Component {
    render() {
        return (
            <div className="SplitPanel">
                <div className="SplitPanel-Left">
                    {this.props.left}
                </div>
                <div className="SplitPanel-Right">
                    {this.props.right}
                </div>
            </div>
        )
    }
}