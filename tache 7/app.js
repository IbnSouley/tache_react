const scaleNames= {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelcius (Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32 
}
//1ere composant
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <div className="alert alert-success w-50">L'eau bout</div>
    }
    return <div className="alert alert-info w-50">L'eau ne bout pas</div>
}

function tryConvert(temperature, convert) {
    const value = parseFloat(temperature)
    if(Number.isNaN(value)){
        return '';
    }
    return (Math.round(convert(value) * 100) / 100).toString()
}

class TemperatureInput extends React.Component {

    constructor (props){
        super(props)
        this.handleChange= this.handleChange.bind(this)
    }

    handleChange (e) {
       this.props.onTemperatureChange(e.target.value)
    }

    render () {
        const {temperature} = this.props
        const name= 'scale' + this.props.scale
        const scaleName= scaleNames[this.props.scale]
        return <div className="form-group mb-4 w-50">
                    <label htmlFor={name}>Temperature (en {scaleName})</label>
                    <input
                    type="text"
                    id={name}
                    value={temperature}
                    className="form-control"
                    onChange={this.handleChange}
                    />
               </div>
    }
}
//2e composant
class Calculator extends React.Component {

    constructor(props){
        super(props)
        this.state={
            scale: 'c',
            temperature: 20
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    // handleTemperatureChange (temperature) {
    //     this.setState({
    //         temperature
    //     })
    // }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange (temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render () {
        const {temperature, scale} = this.state
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelcius)
        const Fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)
    return <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={Fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={celsius}/>
            </div>
    }
}

ReactDOM.render(<Calculator/>, document.getElementById('app'))