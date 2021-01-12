import React, { Component } from 'react'

class  Content extends Component {
    constructor(props) {
        super()
        this.state = {
            taskList: ['Pay Internet','Get Grocery','Do Laundery'],
            task:'',
            tasks: []
        }
    }

    componentDidMount() {
        if(localStorage.getItem('dataSet') !== null) {
            this.setState({
                taskList: JSON.parse(localStorage.getItem('dataSet'))
            })
        }
    }

    taskHandler = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    addTaskItem = (event) => {
        let task = this.state.task;
        this.setState({
                    tasks: this.state.taskList.push(task)    
                });
        localStorage.setItem('dataSet', JSON.stringify(this.state.taskList));
        this.state.task = '';
        event.preventDefault();
    }

    deleteTaskItem = (event) => {  
        let cnfrmToDelete = window.confirm(`Are you sure to DELETE this item - ${event}`)
        if(cnfrmToDelete) {
            localStorage.setItem('dataSet', JSON.stringify(this.state.taskList));   
            this.setState({
                taskList: this.state.taskList.filter(item => item !== event)
            });
        }
    }

    render() {
        return (
            <div>
                <section className='content-wrapper'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 text-left'>
                                <h5>Enter Todo Item and Click Add <span className="badge badge-success float-right">Total Tasks - {this.state.taskList.length}</span></h5>
                            </div>
                            <div className='col-md-12'>
                                <form onSubmit={this.addTaskItem}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <input value={this.state.task} onChange={this.taskHandler} type="text" className="form-control rounded-right mr-1" placeholder="Please enter your todo task here" name="task"/>
                                        <input type='submit' disabled={!this.state.task} value='Add Task' className='btn btn-primary' className={this.state.task ? 'btn btn-primary' : 'btn btn-primary disabled-item'}/>
                                    </div>
                                </form> 
                                <h6 className='text-left'>Recently Added Items</h6>
                                {this.state.taskList.length === 0 ? 
                                <div className="alert alert-danger texr-left" >
                                    <strong>No Tasks Are Added!</strong> Enter Todo Item and Click Add Tasks Button.
                                </div> :
                                <div className='list-group'> 
                                    {
                                        this.state.taskList?.map(item => <div className='list-group-item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-angle" viewBox="0 0 16 16">
                                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.92 5.92 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"/>
                                            </svg>
                                               <span className='ml-2'>{item}</span>
                                               <span className='float-right delete-icon' onClick={this.deleteTaskItem.bind(this,item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                                        </svg>
                                               </span>
                                        </div>) 
                                    }
                                </div>}
                            </div>
                        </div>
                    </div>  
                </section>
            </div>
        )
    }
}

export default Content