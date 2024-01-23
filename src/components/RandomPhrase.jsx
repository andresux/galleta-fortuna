import React from 'react'

const RandomPhrase = ({quote}) => {

    const {author, phrase} = quote

  return (
    <div className='containerPhrase'>
        <p className='bgRec'>{phrase}</p>
        <p className = 'phraseAutor'>Fuente: {author}</p>
    </div>
  )
}

export default RandomPhrase