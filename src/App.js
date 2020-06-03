import React,{useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Joshim','Selim','Tom','razzak','dipjol']
  const products=[{name:'Photoshop',price:'$90.99'},
{name:'Illustrator',price:'$80.99'},
{name:'Adobe',price:'$190.99'}]

const productNames=products.map(product=>product.name)
console.log(productNames)
const nayokNames=nayoks.map(nayok=>nayok)
console.log(nayokNames)

// <Product product={products[0]}></Product>
// <Product product={products[1]}></Product>
// <Person name="Rubel" nayika="joshim"></Person>
// <Person name="Rubel" nayika="rani"></Person>
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hi John</h1>
        <Counter></Counter>
        <Users> </Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }

        </ul>
        {
          products.map(product =><Product product={product}> </Product>)
        }
      <Person name='Joshim'></Person>

      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setUsers(data))
  },[]
)
  return(
    <div>
<h3> Hlw User:{users.length} </h3>
<ul>
{users.map(user=><li>{user.name}</li>)}
</ul>
     </div>

  )
}

function Product(props){
  const productStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    float:'left'

  }
const {name,price}=props.product
console.log(name,price)
  return(
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5> {price}</h5>
      <button>Buy</button>
    </div>
  )
}

function Counter(){
  const [count,setCount]=useState(10)
  const increaseHandle=()=>{
    const newCount=count+1;
    return setCount(newCount)
  }
  const decreaseHandle=()=>{
    const newCount=count-1;
    return setCount(newCount)
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={decreaseHandle}>Decrease </button>
      <button onClick={increaseHandle}>Increase </button>
    </div>
  )
}

function Person(props){
  const personStyle={
    margin:'2px',
    border:'10px solid red',
  }
  console.log(props)
  return(
    <div style={personStyle}>
      <h2> Hi: {props.name} {props.nayika} </h2>
      <h5>Bangladesh er jaan</h5>

    </div>

  )
}

export default App;
