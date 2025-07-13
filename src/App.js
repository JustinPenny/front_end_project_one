import { Footer, Blog, Possibility, Features, WhatContent, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'

const App = () => {
  return (
  <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
    <Brand/>
    <WhatContent/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
  </div>
  )
}

export default App
