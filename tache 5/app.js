function WelcomeFunc ({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {

    render () {
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }

}

ReactDOM.render(<Welcome name="Doucoure">Bonjour tout le monde</Welcome>, document.querySelector('#app'))

//creer une nouvelle date

class Clock extends React.Component {

    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
        // console.log("constructeur", document.getElementById("container"));
        
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
        // console.log("componentDidMount", document.getElementById("container"));                
    }

    componentwillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        // console.log("render", document.getElementById("container"));
        return <div id="container">
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {
    constructor (props){
        super(props)
        this.state = {n: props.start, timer: null}
    }

    componentDidMount(){
        this.play()
    }

    componentwillUnmount(){
        window.clearInterval(this.state.timer)
    }

    increment() {
        this.setState(function (state, props){
           return {n:this.state.n + props.step}
        })

        // this.setState((state, props) => ({n:this.state.n + 1})) function fleche
    }

    pause (){
        window.clearInterval(this.state.timer)
        this.setState({
            timer:null
        })
    }

    play (){
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    reset (){
        this.pause()
        this.play()
        this.setState((state,props) => ({n: props.start}))
    }

    render (){
        return <div>
            Valeur : {this.state.n}
            {this.state.timer ?
            <button onClick = {this.pause.bind(this)}>Pause</button>:
            <button onClick = {this.play.bind(this)}>Lecture</button>}
            <button onClick = {this.reset.bind(this)}>Reinitiliser</button>
        </div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

function Home () {
    return <div>
        {/* <Welcome name = "Doucoure" /> */}
        {/* <Welcome name = "Mamadou" /> */}
        <Clock />
        <Incrementer />
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#som'))











// class Todos extends React.Component{
//     constructor(){
//         super(props)
//         this.state = {
//             inputTodo : "",
//             todos : []
//         }
//     }

//     render(){
//         return (
//             <div className = "container mt-4">
//                 <h1>To-Do-List</h1>
//                 <p>{this.state.inputTodo}</p>
//                 <div className = "input-group mb-3">
//                     <input
//                     type = "text"
//                     value = "{this.state.inputTodo}"
//                     onChange = {(e) => {
//                         this.setState({inputTodo : e.target.value})
//                     }}
//                     className = "form-control"
//                     placeholder = "Ajouter une tache"
//                     />
//                     <button className = "btn btn-primary" onClick = {() =>
//                         {
//                             this.setState({todos : [...this.state.todos, this.state.inputTodo]})
//                         }
//                     }>
//                         Ajouter
//                     </button>
//                 </div>
//                 <ul className = "list-group">
//                     {
//                         this.state.todos.map((todo) => {
//                             return <li>{todo}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<todos/>, document.getElementById("root"))

//gestionnaire d'evenement

// class ManualIncrementer extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {n : 0}
//     }

//     increment (){
//         this.setState((state, props) => ({n:this.state.n + 1}))
//     }

//     render (){
//         return <div>Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrementer</button></div>
//     }
// }