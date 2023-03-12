import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';


import './Timeline.css'
import { FormEvent, KeyboardEvent, useState } from 'react';

export const Timeline = () =>{

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
      'My fisrts Tweet',
      'Tweeter Clone is awesome',
      'Clemilson Wilma de Azevedo, que está desenvolvendo aqui também tem português',
      'Meu quarto tweet, e está tudo indo bem'
  ])

  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('');
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){

      setTweets([newTweet, ...tweets])
      setNewTweet('');
    }
  }

return(
    <main className='timeline'>

    <Header title = 'Home'/>


    <form onSubmit={createNewTweet} className='new-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://www.github.com/clemilsonazevedo.png" alt="Clemilson Azevedo" />
        <textarea 
        id='tweet' 
        placeholder="What's Happening?" 
        onKeyDown={handleHotKeySubmit}
        onChange={(event) => {
          setNewTweet(event.target.value)
        }}
         />
      </label>

        <button type="submit">Tweet</button>
    </form>

    <Separator />

    {tweets.map(tweets =>{
      return(
        <Tweet key={tweets} content={tweets} />
      )
    })}

    </main>
)}