import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiMessageSquareDots} from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
      <a href="#v"><AiTwotoneHome /></a>
      <a href="#about"><BiUser /></a>
      <a href="#experience"><BiBookOpen /></a>
      <a href="#portfolio"><MdOutlineHomeRepairService /></a>
      <a href="#contact"><BiMessageSquareDots /></a>
    </nav>
  )
}

export default Nav