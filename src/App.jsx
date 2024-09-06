import './App.css'
// Components
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

// Objects
import buttonsText from "./constants/buttons.js";
import productsInfo from "./constants/products.js";
import articles from "./constants/articles.js";

function App() {
  return (
    <div className="wrapper">
      <h1>Handbags & Purses</h1>
      <nav>
        {buttonsText.map((item) => (
          <Button
            key={item.text}
            text={item.text}
          />
        ))}
      </nav>
      <main>
        {
          productsInfo.map((item) => (
            <Product
              key={item.title}
              description={item.description}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))
        }
      </main>
      <footer>
        {
          articles.map((item) => (
            <Tile
              key={item.title}
              title={item.title}
              text={item.text}
              img={item.img}
              changeOrder={item.changeOrder}
            />
          ))
        }
      </footer>
    </div>
  )
}

export default App
