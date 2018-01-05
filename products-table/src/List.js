import React, {Component} from 'react'

export default class List extends Component {

    render() {
        let available = this.props.available || [];
        let categories = {};
        
        available.forEach((item) => {
            categories[item.category] = categories[item.category] || [];
            categories[item.category].push(item);
        });


        return (
            <div>
                {
                    Object.keys(categories).map((category) => <ul>
                            <li>
                                {category}
                                <ul>
                                    {
                                        categories[category].map((item)=><li>{`Name: ${item.name} Price: ${item.price}`}</li>)     
                                    }
                                </ul>
                            </li>
                        </ul>)
                }
            </div>

        )
    }
}