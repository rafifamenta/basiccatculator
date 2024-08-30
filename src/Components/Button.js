import "./button.css"

export default function Button({ clickHandler, name, gray, violet, wide, green }) {

  const handleClick = () => clickHandler(name)

  const className = [
    "component-button",
    gray ? "gray" : "",
    violet ? "violet" : "",
    wide ? "wide" : "",
    green ? "green" : "",
  ]

  return (
    <div className={className.join(" ").trim()}>
      <button className="btn" onClick={handleClick}>{name}</button>
    </div>
  )
}