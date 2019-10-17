import api from '../../services/api';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';

export const fetchTodosSuccess = todoshow => ({
  type: FETCH_TODOS_SUCCESS,
  payload: { todoshow }
});

export function fetchTodos() {
    return async dispatch => {
      const response = await api.get('/todos');
        try{
          dispatch(fetchTodosSuccess(response.data));
          console.log(response.data);
          return response.data;
        }catch(erro){
          console.log(erro);
        }       
    };
  }
  
 