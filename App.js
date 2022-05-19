import './App.css'

function App() {
    const name = 'Carlos'
    const reName = name.toUpperCase()

    function sum(a, b){
        return a + b
    }

const url = "http://via.placeholder.com/150"

    return (
        <div className="App">
            <h2></h2>
            <h2>Alterando o JSX</h2>
            <p>Olá, {name}</p>
            <p>Soma; {sum(1, 2)}</p>
            <img src={url} alt="Minha imagem"></img>
        </div>
    )
}

export default App
