import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../../store/actions/todo";
import { Link } from 'react-router-dom'
import './style.scss';

class Home extends Component{
  
      componentDidMount() {
        this.props.dispatch(fetchTodos());
      }


      render(){
        const {item} = this.props;
          return(
            <div className="container-fluid">
                <div className="d-flex justify-content-end mt-4 mr-3">
                    <Link to="/createTodoList" className="buttonAddTodoList"><span>+</span></Link>
                </div>

                <div className="row ml-1">
                  <div className='completo'></div><span className="ml-2">Tarefa Completa</span>
                  <div className="aFazer ml-4"></div><span className="ml-2">Tarefa A Fazer</span>
                </div>
                
                <div className="row mt-5">
                  {item.map(itens =>
                    <div className="col-md-3">
                      {itens.completed == false ? (
                        <div class="card text-white bg-primary mb-3">
                          <div class="card-header">To-do </div>
                          <div class="card-body">
                            <h5 class="card-title" key={itens.id}>{itens.title}</h5>
                            <small>{itens.completed}</small>
                          </div>
                        </div>
                      ):( 
                        <div class="card text-white bg-success mb-3">
                          <div class="card-header">To-do </div>
                          <div class="card-body">
                            <h5 class="card-title" key={itens.id}>{itens.title}</h5>
                            <small>{itens.completed}</small>
                          </div>
                        </div>
                      )}
                    </div>
                  )}   
                </div>       
            </div>
          )
      }
} 

const mapStateToProps = state => ({
  item: state.todo.items,
});

export default connect(mapStateToProps)(Home);