//Premiere maniere de creer un composant

// function Welcome(props) {
//     return <h1>Bonjour {props.name}</h1>
// }
//ReactDOM.render(<Welcome name="Doucoure" />, document.querySelector('#app'))


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
    }

    ComponentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    ComponentwillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {
    constructor (props){
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }

    componentDidMount(){
        window.setInterval(this.increment.bind(this), 1000)
    }

    componentwillUnmount(){
        window.clearInterval(n.this.timer)
    }

    increment() {
        this.setState(function (state, props){
           return {n:this.state.n + props.step}
        })

        // this.setState((state, props) => ({n:this.state.n + 1})) function fleche
    }

    render (){
        return <div>Valeur : {this.state.n}</div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

function Home () {
    return <div>
        <Welcome name = "Doucoure" />
        <Welcome name = "Mamadou" />
        <Clock />
        <Incrementer start ={10}/>
        <Incrementer start ={100} step={10}/>
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