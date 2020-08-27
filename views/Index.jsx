const React = require('react');

class Index extends React.Component {
    render(){
        const todos = this.props.todos
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>To-Do List</h1>
                <p>{todos.length > 0 ? '' : <h3 style={{textAlign: 'center'}}> List is Empty!</h3>}</p>
                <ul style={{listStyle: 'none'}}>
                    {
                        todos.map((todo, i) => {
                            return (
                                <div style={{textAlign: 'center', marginLeft: '-40px', marginBottom: '20px'}}>
                                    <li key={todo._id}>
                                        <a>
                                            {todo.item} - Not Done
                                        </a>
                                        <form style={{marginTop: '10px'}} action={`/todos/${todo._id}?_method=DELETE`} method='POST'>
                                            <input type='submit' value={'Done'}/>
                                        </form>
                                    </li>
                                </div>
                            
                            )
                        })
                    }
                </ul>
                <div>
                    <h1 style={{textAlign: 'center'}}>
                        New Item
                    </h1>
                    <div style={{textAlign: 'center'}}>
                        <form action='/todos' method='POST'>
                            Item: <input style={{marginBottom: '10px'}} type='text' name='item'/>
                            <br/>
                            <input type='submit' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}    

module.exports = Index;