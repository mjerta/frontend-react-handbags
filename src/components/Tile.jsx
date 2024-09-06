function Tile({img, title, text, changeOrder}) {
  return (
    <section className={
      changeOrder && "change-order"
    }>
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