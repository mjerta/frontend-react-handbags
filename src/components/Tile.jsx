function Tile({img, title, text}) {
  return (
    <section>
      <h2>{title}</h2>
      {text && text.length > 0 ?
        <>
          <p>{text}</p>
          <p>{text}</p>
        </>
        :
        <img src={img} alt={title}/>
      }
    </section>
  )
}

export default Tile;