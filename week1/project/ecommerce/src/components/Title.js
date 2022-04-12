import "../css/Title.css"

function Title({title}) {
  return (
    <div className="title-container">
      <h1 className="title-container-title">{title}</h1>
    </div>
  )
}

export default Title