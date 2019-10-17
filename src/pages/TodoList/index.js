import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import './style.scss';

//api
import api from '../../services/api';


class TodoList extends Component{

    handleSubmit = async formValue => {
        const response = await api.post('/todos',{
            formValue,
            userId:1    
        });
        console.log(response);
    }   

    render(){
        const { pristine, submitting } = this.props;

        return(
        <>
            <div className="container">
                <h1 className="d-flex justify-content-center mt-5 title">Formulario To-do List</h1>
                <div className="d-flex justify-content-center mt-5">
                    <form className="form-inline" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <div className="form-group mx-sm-3 mb-2">
                            <label  className="sr-only">Password</label>
                            <Field name="title" type="text" className="form-control"  placeholder="Digite um Titulo para uma Tarefa" component="input"/>
                        </div>
                        <Field name="employed" id="employed" component="input" type="checkbox" className="mr-3"/>
                        <button disabled={pristine || submitting}  type="submit" className="btn btn-primary mb-2">Confirm Title</button>
                    </form> 
                </div>
            </div>
        </>
        )
    }
}


  
export default reduxForm({form: 'todoForm'})(TodoList);