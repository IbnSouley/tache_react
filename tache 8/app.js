class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleButtonClick = (e) => {
        const buttonValue = e.target.value;
        if (buttonValue === 'AC') {
            this.setState({ value: '' });
        } else if (buttonValue === 'DE') {
            this.setState(prevState => ({
                value: prevState.value.slice(0, -1)
            }));
        } else if (buttonValue === '=') {
            try {
                this.setState({
                    value: eval(this.state.value) || ''
                });
            } catch (error) {
                this.setState({ value: 'Error' });
            }
        } else {
            this.setState(prevState => ({
                value: prevState.value + buttonValue
            }));
        }
    }

    render() {
        return (
            <div className="container">
                <div className="calculator">
                    <form action="">
                        <div className="display">
                            <input type="text" value={this.state.value} readOnly />
                        </div>
                        <div>
                            <input type="button" value="AC" onClick={this.handleButtonClick} />
                            <input type="button" value="DE" onClick={this.handleButtonClick} />
                            <input type="button" value="." onClick={this.handleButtonClick} />
                            <input type="button" value="/" onClick={this.handleButtonClick} />
                        </div>
                        <div>
                            <input type="button" value="7" onClick={this.handleButtonClick} />
                            <input type="button" value="8" onClick={this.handleButtonClick} />
                            <input type="button" value="9" onClick={this.handleButtonClick} />
                            <input type="button" value="*" onClick={this.handleButtonClick} />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={this.handleButtonClick} />
                            <input type="button" value="5" onClick={this.handleButtonClick} />
                            <input type="button" value="6" onClick={this.handleButtonClick} />
                            <input type="button" value="+" onClick={this.handleButtonClick} />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={this.handleButtonClick} />
                            <input type="button" value="2" onClick={this.handleButtonClick} />
                            <input type="button" value="3" onClick={this.handleButtonClick} />
                            <input type="button" value="-" onClick={this.handleButtonClick} />
                        </div>
                        <div>
                            <input type="button" value="00" onClick={this.handleButtonClick} />
                            <input type="button" value="0" onClick={this.handleButtonClick} />
                            <input type="button" value="=" className='equal' onClick={this.handleButtonClick} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
