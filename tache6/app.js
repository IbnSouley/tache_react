// class field extends React.Component{

//     render () {
//         const {name, value, onChange, children} = this.props
//         return <div className = "form-group">
//             <label htmlfor={name}>{children}</label>
//             <input
//             type="text"
//             value={value}
//             onChange={onChange}
//             id={name}
//             name={name}
//             className="form-control"
//             />
//         </div>
//     }
// }

function Field({name, value, onChange, children, type}) {
    return (
        <div className={type === 'checkbox' ? 'form-check' : 'form-group'}>
            <label htmlFor={name}>{children}</label>
            <input
                type={type}
                value={type === 'checkbox' ? undefined : value}
                checked={type === 'checkbox' ? value : undefined}
                onChange={onChange}
                id={name}
                name={name}
                className={type === 'checkbox' ? 'form-check-input' : 'form-control'}
            />
        </div>
    );
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            newsletter: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const type = e.target.type;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify(this.state);
        console.log(data); // Affiche les données dans la console
        this.setState({
            nom: "",
            prenom: "",
            newsletter: false
        });
    }

    render() {
        return (
            <form className="container col-lg-6" onSubmit={this.handleSubmit}>
                <Field name="nom" value={this.state.nom} onChange={this.handleChange} type="text">
                    Nom
                </Field>
                <Field name="prenom" value={this.state.prenom} onChange={this.handleChange} type="text">
                    Prénom
                </Field>
                <Field 
                    name="newsletter"
                    value={this.state.newsletter}
                    onChange={this.handleChange}
                    type="checkbox"
                >
                    S'abonner à la newsletter
                </Field>
                <div className="form-group">
                    <button className="btn btn-primary">Envoyer</button>
                </div>
                <div>{JSON.stringify(this.state)}</div>
            </form>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("app"));
