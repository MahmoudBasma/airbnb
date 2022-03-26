import './style.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from "./data"

function App() {
  const cards = Data.map(
    item => {
      return (
        <Card 
        key={item.id}
        /*item = {item}
        We can use this, but then instead of props.property 
        it will be props.item.property 
        Note: We need to take care of the property name in the item (data file)
        

        we can also use 
        {..item} which is a spread item that passes the data into the component 
        using the same name of the item properties not props properties
        */
        img="icon.png"
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots = {item.openSpots}
     />
      )
    }
  )
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <section className="cards-list">
       {cards}
      </section>
    </div>
  );
}

export default App;
