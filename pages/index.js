import React from 'react'
import ss from './index.sass'

export const IndexPage = () => (
  <div className= "teste">
    {/* <div className= {ss.example}> */}

    <style jsx>{`
      .teste {
        font: 30px Helvetica, Arial, sans-serif;
        background: #eee;
        margin: 300px;
        text-align: center;
      }

      .hello:hover{
        background-color: #aaaaaa
      }
    `}</style>
    Teste {'<3'}
  </div>
)

export default IndexPage
