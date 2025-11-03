import { useState } from 'react'
// import shrek from 'https://algoritmikaclub.github.io/frontend/React-2/dist/assets/shrek-Cr5Fh38_.png'
import arg from './Arg/arg.js'
import Header from './Header/Header'
import Window from './Window/Window'
import './App.css'

function App() {

  return (
    <>
    <Header />
    {arg.map((btn, i) => <Window key = {i} pic = {btn.pic} text = {btn.text} />)}
    </>
  )
}

export default App
