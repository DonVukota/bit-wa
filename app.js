const products = ['apples', 'oranges', 'bananas'];

const ProductList = () => {
    const myProducts = [];
    products.forEach((product, index) => {
        myProducts.push(<Product name={product} key={index} />)
    })
    return myProducts;
}


const App = () => {
    const name = "Uros"
    const nameDva='Vuk'
    return (
        <div>
            <h1>Hi from {name}</h1>
            <ShoppingList name={name} />
            <ShoppingListDva nameDva={nameDva}/>
        </div>
    )
}
const ShoppingListDva=(props)=>{
    return (
        <div>
            <h5>{props.nameDva}</h5>
            <ul>
                {ProductList()}
            </ul>
        </div>
    )
}
const ShoppingList = (props) => {
    console.log(props);

    return (
        <div>
            <h4>{props.name}</h4>
            <ul>
                {ProductList()}
            </ul>
        </div>
        
    )
}

const Product = (props) => {

    const { name, index } = props
    return <li key={index}>{name}</li>
}

const reactElement = document.querySelector('.root');
ReactDOM.render(<App />, reactElement)