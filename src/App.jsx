import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";
import storyImageOne from "./assets/brand.png";
import storyImageTwo from "./assets/our_story.png";
import Tile from "./components/Tile.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
            text={"To the collection"}
          />
          <Button
            text={"shop all bags"}
          />
          <Button
            text={"pre-orders"}
          />
        </nav>
        <main>
          <Product
            description={"best seller"}
            img={bagOne}
            title="The handy bag"
            price={400}
          /> <Product
          description={"best seller"}
          img={bagTwo}
          title="The stylish bag"
          price={250}
        /> <Product
          description={"new collection"}
          img={bagThree}
          title="The simple bag"
          price={300}
        /> <Product
          description={"best seller"}
          img={bagFour}
          title="The trendy bag"
          price={150}
        />
        </main>
        <footer>
          <Tile
            // img={storyImageOne}
            title={"THE BRAND"}
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consectetur, distinctio, doloremque, illum labore nulla officia perferendis quaerat quam repudiandae vel vero. Adipisci ea eius, error facere, iste labore, laudantium molestiae numquam odit quasi qui recusandae reiciendis vero. Nam?"}
          />
          <Tile
            img={storyImageOne}
          />
          <Tile
            img={storyImageTwo}
          />
          <Tile
            // img={storyImageOne}
            title={"THE BRAND"}
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consectetur, distinctio, doloremque, illum labore nulla officia perferendis quaerat quam repudiandae vel vero. Adipisci ea eius, error facere, iste labore, laudantium molestiae numquam odit quasi qui recusandae reiciendis vero. Nam?"}
          />
        </footer>
      </div>
    </>
  )
}

export default App
