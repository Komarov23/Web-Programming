import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from "./components/Products";
import Counter from "./components/Products/Counter";
import Dialog from './components/Dialog';

const products = [
  {
    id: 1,
    name: "Смартфон Samsung Galaxy S21",
    description: "Смартфон Samsung Galaxy S21 з високим роздільною здатністю екрану, потужним процесором та відмінною камерою.",
    price: "$799.99",
    checked: false
  },
  {
    id: 2,
    name: "Ноутбук Dell XPS 13",
    description: "Ноутбук Dell XPS 13 з процесором Intel Core i7, 16 ГБ оперативної пам'яті та 512 ГБ SSD-накопичувачем.",
    price: "$1,299.99",
    checked: false
  },
  {
    id: 3,
    name: "Кавоварка DeLonghi Magnifica",
    description: "Кавоварка DeLonghi Magnifica з автоматичною системою приготування кави та піною для капучино.",
    price: "$499.99",
    checked: false
  },
  {
    id: 4,
    name: "Фітнес-браслет Fitbit Charge 4",
    description: "Фітнес-браслет Fitbit Charge 4 з функцією відстеження активності, сну та GPS.",
    price: "$149.99",
    checked: false
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange (product) {
    this.setState((state) => {
      return {
        products: state.products.map(p => {
          if (p.id !== product.id) return p;
          return {
            ...p,
            checked: !p.checked
          }
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter products={this.state.products} />
        <Products products={this.state.products} onChange={this.onChange} />
        <Dialog />
        <Footer/>
      </div>
    );
  }
}

export default App;
