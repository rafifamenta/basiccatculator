import Button from "./Button";
import "./buttonPanel.css"

export default function ButtonPanel({ clickHandler }) {

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandler={handleClick} className="gray special-button" />
        <Button name="+/-" clickHandler={handleClick} className="gray special-button" />
        <Button name="%" clickHandler={handleClick} className="gray special-button" />
        <Button name="/" clickHandler={handleClick} violet />
      </div>
      <div>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} violet />
      </div>
      <div>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} violet />
      </div>
      <div>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} violet />
      </div>
      <div>
        <Button name="0" clickHandler={handleClick} className="wide special-button" />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} green />
      </div>
    </div>
  )

}