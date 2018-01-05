import React, {Component} from 'react';

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            sex: props.sex || ['Female', "Male"]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label>Name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <input type="submit" vaue="Submit" onClick={this.handleSubmit}/>

                <hr/>
                <label>description
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                </label>
                <hr/>
                <label>sex
                    <select name="sexSelection" value={this.state.sexSelection} onChange={this.handleChange}>
                        ({this.state.sex.map((s)=> <option>{s}</option>)})
                    </select>
                </label>
            </form>
        )
    }
}
