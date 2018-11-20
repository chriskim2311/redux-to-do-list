import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToDoItem} from '../actions'
import {Field, reduxForm} from 'redux-form';
import NavButton from './nav_button'


class AddItem extends Component {
    renderInput({size, input, label, meta:{touched, error}}){

        
        return (
            <div className={`input-field col ${size}`}>
            <input {...input} type="text"/>
            <label>{label}</label>
            <p className="red-text">{touched && error}</p>
            </div>
        )
    }
    handleAddItem = async (values) => {
        console.log('Form Values:', values)
        await this.props.addToDoItem(values);
        
        this.props.history.push('/');
    }
    render() {

        
        const {handleSubmit, reset} = this.props;
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton to="/" text="Back to List" />
                <form onSubmit={handleSubmit(this.handleAddItem)}>
                    <div className="row">
                    <Field size="s12" name="title" label= "Title" component={this.renderInput}/>
                    </div>
                    <div className="row">
                    <Field size="s12"  name="details" label= "Details" component={this.renderInput}/>
                    </div>
                    
                    <div className="row">
                    <div className="col s6 center">
                    <button type="button" onClick={reset} className="btn red">Cancel</button>
                    </div>
                        <div className="col s6 center">
                        <button className="btn blue">Add Item</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate({title, details}) {
    const error = {};
    if(!title) {
        error.title="Please enter a title for your to do item"
    }
    if(!details) {
        error.details = 'Please enter details for your to do item'
    }
    return error;


}

AddItem =  reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);


export default connect(null, {
    addToDoItem: addToDoItem
})(AddItem)