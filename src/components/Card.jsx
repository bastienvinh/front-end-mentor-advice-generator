import "./Card.scss"

import { useEffect, useState } from 'react'

import SVGDesktopDivider from "../images/pattern-divider-desktop.svg"
import SVGMobileDivider from "../images/pattern-divider-mobile.svg"
import Button from "./Button"

const Card = () => {

  // 484 / 300
  const [advice, setAdvice] = useState(null)

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(res => res.slip)
      .then(setAdvice)
  }, [])

  const onClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(res => res.slip)
      .then(setAdvice)
  }

  return (
    <div className="card">
      <h3>Advice #{advice?.id}</h3>
      <p className="advice">{advice?.advice}</p>
      <picture>
        <source srcSet={SVGMobileDivider} media="(max-width: 799px)" />
        <source srcSet={SVGDesktopDivider} media="(min-width: 800px)" />
        <img src={SVGMobileDivider} alt="divider" />
      </picture>
      <Button onClick={onClick} />
    </div>
  )
}

export default Card