import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom';

import './Tweet.css'

interface TweetProps{
  content: string;
}

export const Tweet = (props:TweetProps) =>{
  return(
    <Link to='/status' className="tweet">
      <img src="https://www.github.com/clemilsonazevedo.png" alt="Clemilson Azevedo" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Clemilson Azevedo</strong>
          <span>@_ClemAzevedo_</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            5K
          </button>

          <button type='button'>
            <ArrowsClockwise />
            2K
          </button>

          <button type='button'>
            <Heart />
            35K
          </button>
        </div>
      </div>
    </Link>
  )
}