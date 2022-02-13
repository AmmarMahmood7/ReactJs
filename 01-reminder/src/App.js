import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

const [items,setItems] = useState(data);

  return <React.Fragment>
    <main>
      <section className='container'>
        <h3>{items.length} birthdays Today</h3>

        {items.map((person)=>{
          return <List key = {person.id} image={person.image} age ={person.age} name = {person.name}/>
        })}
        
        <button onClick = {()=>{
          setItems([])
        }}>Clear All</button>
      </section>
    </main>
  </React.Fragment>;
}

export default App;
