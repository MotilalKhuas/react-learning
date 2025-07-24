import React, {useState} from 'react'

const TodoItem = ({item, index, totalTask, handleCheckBox, handleDelete, handleTaskUpdate, handleMoveTaskUp, handleMoveTaskDown}) => {
    console.log(totalTask);

    const [showEditForm, updateShowEditForm] = useState(false);

    function handleEdit(){
        updateShowEditForm(true);
    }

    function handleEditCancel(){
        updateShowEditForm(false);
    }

    function handleEditSubmit(e){
        e.preventDefault();
        const text = e.target.todo.value;
        handleTaskUpdate(item.id, text);
        updateShowEditForm(false);
    }

    const todoItem = (
        <div>
            <button disabled={index==0} onClick={()=>handleMoveTaskUp(index)}>⬆️</button>
            <button disabled={index==totalTask-1} onClick={()=>handleMoveTaskDown(index)}>⬇️</button>
            <input 
                id={item.id}
                type="checkbox" 
                checked={item.completed} 
                onChange={(e)=>handleCheckBox(item.id, e.target.checked)}
            />
            <label 
            htmlFor={item.id} 
            style={{textDecoration:item.completed?"line-through":"none"}}>
                {item.text}
            </label>
            <button type="button" onClick={handleEdit}>
                Edit
            </button>
            <button type="button" onClick={()=>handleDelete(item.id)}>
                Delete
            </button>
        </div>
    )

    const editForm = (
        <div>
            <form onSubmit={handleEditSubmit}>
                <input type="text" name="todo" defaultValue={item.text}/>
                <button type="submit">Update</button>
                <button type="button" onClick={handleEditCancel}>Cancel</button>
            </form>
        </div>
    );

    return (
        showEditForm ? editForm : todoItem
    )
}

export default TodoItem