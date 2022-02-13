import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {


  const [open, setOpen] = useState(false)
  return <main>

    <div className="container">
      <h3>Questions And Answers About Login</h3>
      <section className='info'>
        {data.map((questions) => {
          return <SingleQuestion key={questions.id} title={questions.title} info={questions.info} />
        })}

      </section>
    </div>
  </main>;
}

export default App;
