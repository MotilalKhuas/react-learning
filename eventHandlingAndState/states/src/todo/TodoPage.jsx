import React, {useState} from 'react'
import TodoItem from './TodoItem.jsx';

export default function TodoPage(){

    const [taskList, updateTaskList] = useState([]); 
    const emptyState = (<h3>Nothing's here, Add a Todo</h3>)
    const totalTaskCompleted = (taskList.filter(item=>item.completed)).length;
    const isTaskSorted = taskList.reduce((result, item, index)=>{
        if (!result || !taskList[index + 1]) return result;
        return item.text.localeCompare(taskList[index + 1].text) <= 0;
    }, true)

    function handleSubmitTask(e){
        e.preventDefault();
        const newTaskList = [...taskList, {
            text : e.target.task.value,
            id : crypto.randomUUID(),
            completed : false
        }];
        updateTaskList(newTaskList);
        e.target.reset();
    }

    function handleCheckBox(id, checked){
       const newTaskList = taskList.map(item=>{
        if(item.id === id)
            item.completed = checked;
        return item;
       })
       updateTaskList(newTaskList);
    }

    function handleDelete(id){
        const newTaskList = taskList.filter(item=>item.id!==id)
        updateTaskList(newTaskList);
    }

    function handleDeleteAll(){
        updateTaskList([]);
    }

    function handleSort(){
        const newTaskList = [...(taskList.sort((a,b)=>{
            return a.text.localeCompare(b.text)
        }))];
        updateTaskList(newTaskList);
    }

    function handleTaskUpdate(id, text){
        const newTaskList = taskList.map((item)=>{
            if(item.id === id) item.text = text;
            return item;
        })
        updateTaskList(newTaskList);
    }

    function handleMoveTaskUp(index){
       if (index == 0) return;
       const newTaskList = [...taskList];
       [newTaskList[index], newTaskList[index-1]] = [newTaskList[index-1], newTaskList[index]]
       updateTaskList(newTaskList);
    } 

    function handleMoveTaskDown(index){
        if(index == taskList.length-1) return;
        const newTaskList = [...taskList];
        [newTaskList[index], newTaskList[index+1]] = [newTaskList[index+1], newTaskList[index]]
        updateTaskList(newTaskList);
    }

    return(
        <div>
            {/* <h1>Todo App</h1> */}
            <form onSubmit={handleSubmitTask}>
                <input 
                    type="text" 
                    name="task" 
                    placeholder="Enter the task here..."
                />
                <button>Submit</button>
            </form>

            <button disabled={isTaskSorted} onClick={handleSort}>
                Sort task
            </button>
            <button disabled={taskList.length <= 0} onClick={handleDeleteAll}>
                    Delete All
            </button>

            {taskList.length > 0 && <p>{totalTaskCompleted}/{taskList.length} Completed</p>}

             {taskList.length > 0 ? 
                taskList.map(item=>{
                    return <TodoItem 
                                key={item.id} 
                                item={item} 
                                index={taskList.findIndex(data=>data.id==item.id)}
                                totalTask={taskList.length}
                                handleCheckBox={handleCheckBox} 
                                handleDelete={handleDelete}
                                handleTaskUpdate={handleTaskUpdate}
                                handleMoveTaskUp={handleMoveTaskUp}
                                handleMoveTaskDown={handleMoveTaskDown}
                            />
                }):
                emptyState
            } 
        </div>
    )
}
