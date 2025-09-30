import { FaTimesCircle } from 'react-icons/fa';

const ShowTasks = ({tasks, setTasks}) => {
    
    console.log(tasks)
    
    // ! toogle done fonksiyonu;
    const toogleDone = (id) => {
        setTasks(
            tasks.map((item) => item.id === id ? {...item, isDone: !item.isDone } : item)
        )
    }

    // ! delete task fonksiyonu;
    const deleteTask = (id) => {
        // task id'si, gelen id ile eşleşmeyenleri döndürür.
        // böylece istenen id'ye sahip task silinmiş/görüntülenmemiş olur.
        setTasks(tasks.filter((task) => task.id !==id));
    };

  return (
    <div>
        {tasks.map((item)=>{
            const{id, isDone, task, day} = item
            return (
                <div 
                    key={id}
                    className={`task ${isDone ? 'done' : ''}`}
                    onDoubleClick={()=>toogleDone(id)}
                >
                    <h3>
                        {task}
                        <FaTimesCircle
                            style={{color:'red'}}
                            onClick={()=> deleteTask(id)}
                        />
                    </h3>
                    <h6>{day}</h6>
                </div>
            )
        })}
    </div>
  )
}

export default ShowTasks