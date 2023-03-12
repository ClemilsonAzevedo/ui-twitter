import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'

export const Status = () => {

  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswers] = useState([
    'Concordo...',
    'So coll',
    'Thanks for your feedback',
    'Aiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii' 
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('');
    }
  }

  return(
    <main className='status'>

    <Header title = 'Tweet'/>

    <Tweet content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eos, laudantium repellendus expedita nesciunt in. Sed, optio, consequuntur exercitationem, eveniet alias fuga nihil quis hic vel ab nobis! Odit, distinctio!'/>

    <Separator />

    <form onSubmit={createNewAnswer} className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://www.github.com/clemilsonazevedo.png" alt="Clemilson Azevedo" />
        <textarea 
        id='tweet' 
        placeholder="Tweet your answer"
        onKeyDown={handleHotKeySubmit}
        value={newAnswer}
        onChange={(event) => {
          setNewAnswer(event.target.value)
        }}
        />
      </label>
        
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
    </form>

    {answers.map(answer =>{
      return(
        <Tweet key={answer} content={answer} />
      )
    })}

    </main>
  )
}
