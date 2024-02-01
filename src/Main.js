import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='main-container'>
        <div className='padder main-header-above'>
            Header
        </div>
        <div className='padder sidebar'>
            Sidebar
        </div>
        <div className='padder content1'>
            Content 1
        </div>
        <div className='padder content2'>
            Content 2
        </div>
        <div className='padder content3'>
            Content 3
        </div>

        <footer className='padder main-footer-below'>
            Footer
        </footer>
    </div>
  )
}

export default Main