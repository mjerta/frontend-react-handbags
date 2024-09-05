
function Button({text}) {

  return (
    <button className="button" onClick={() => console.log(text)}>
      {text}
    </button>
  )


}

export default Button;