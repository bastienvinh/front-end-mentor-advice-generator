import { ReactComponent as SVGDice } from "../images/icon-dice.svg"

import "./Button.scss"

const Button = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}><SVGDice /></button>
  )
}

export default Button