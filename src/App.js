
import { useState } from 'react';
import './index.css';

function App(){
  const data=localStorage.getItem('lists')?JSON.parse(localStorage.getItem('lists')):[];
  console.log()
  const [list,setList]=useState(data);
  const [newTask,setNewTask]=useState("");
  const[search,setSearch]=useState('');

  console.log(list);
const newip=(e)=>{
  setNewTask(e.target.value);
}
const addtask=()=>{
  localStorage.setItem('lists',JSON.stringify([...list,newTask]));
  setList([...list,newTask]);
  setNewTask("");

}
const deleTask=(i)=>{
  const delList=[...list];
  delList.splice(i,1);
  setList(delList);
  localStorage.setItem('lists',JSON.stringify(delList));
}
   const updateTask=(e,i)=>{
   const uptask=[...list];
   uptask.splice(i,1,e.target.value)
   setList(uptask)
 localStorage.setItem('lists',JSON.stringify(uptask));
  }

  const keyEnter=(e)=>{
    console.log(e.key);
    if(e.key==="Enter"){
    addtask();
   }
  }
const searchfun=(val)=>
{
  setSearch(val);
}


  return(
   
    <div className='App'>
       <div className='search'>
          <input type='text' placeholder='Search Task🔎' onChange={(e)=>{searchfun(e.target.value)}}/>
    </div>
         <h1 className='heading'>To-Do-List⚡</h1>
      <div className='inputs'>
        <input type="text" onChange={(e)=>{newip(e)}} onKeyDown={keyEnter}  value={newTask}/>
        <button className='btn' onClick={addtask}>Add Task👍</button>
      </div>
        <div className='container'>{
          list.map((val,i)=>{
            if(val.toLowerCase().includes(search.toLowerCase())){
           return (
           <div className='list' key={i}>
                   <input type="text" value={val} onChange={(e)=>{updateTask(e,i)}} />
                   {/* <input type="text" value={val}  /> */}
                   <span className='icon' onClick={()=>{deleTask(i)}}>❌</span>
          </div>)
         }
        }) 
       }
      </div>
  </div>
  )
}
export default App;
