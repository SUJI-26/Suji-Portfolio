import { useState, useEffect } from 'react'

const TypedText = () => {
  const words = ['Frontend Developer', 'Web Developer', 'Web Designer']
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex]
      const shouldDelete = isDeleting
      setText(prev => 
        shouldDelete
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      )

      if (!shouldDelete && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (shouldDelete && text === '') {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    const timer = setTimeout(type, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words])

  return <span className="typed-text">{text}</span>
}

export default TypedText