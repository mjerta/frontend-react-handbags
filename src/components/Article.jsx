function Article({description,img, title, price}) {
  return (
    <article>
      <span>{description}</span>
      <img src={img} alt={title} />
      <p>{title}</p>
      <h4>€{price},-</h4>
    </article>
  )
}
export default Article;