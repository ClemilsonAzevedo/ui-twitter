import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
import './Sidebar.css';
import twitterLogo from '../assets/twitter-logo.svg'

import { NavLink } from 'react-router-dom'

export const Sidebar = () =>{
  return(
  <aside className="sidebar">
    <img src={twitterLogo} className="logo " alt="Logo" />

    <nav className='main-navigation'>
      <NavLink to="/">
      <House weight='fill' />
      <span>Home</span>
      </NavLink> 
      <a href="">
      <Hash />
      <span>Explore</span>
      </a>
      <a href="">
      <Bell />
      <span>Notifications</span>
      </a>
      <a href="">
      <Envelope />
      <span>Messages</span>
      </a>
      <a href="">
      <BookmarkSimple />
      <span>Bookmarks</span>
      </a>
      <a href="">
      <FileText />
      <span>Lists</span>
      </a>
      <a href="">
      <User />
      <span>Profile</span>
      </a>
      <a href="">
      <DotsThreeCircle />
      <span>More</span>
      </a>
    </nav>

    <button className='new-tweet' type='button'>
    <Pencil />
    <span>Tweet</span>
    </button>
    </aside>
)
}      