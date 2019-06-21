import React,{Component} from 'react'

class RegistrationPass extends Component {
    state = {
        password: ""
    };

    componentWillReceiveProps(nextProps) {
        this.setState({password: nextProps.password})
    }

    onBlur = (e) => {
        this.props.onAttributeUpdate(
            { password: this.state.password }
        )
    };

    onChange = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        const { disabled, passwordError } = this.props;
        const { password } = this.state;
        return (
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label"></label>
                <input
                    disabled={disabled}
                    required
                    className={`col-sm-6 form-control registration${passwordError ? "is-invalid" : ""}`}
                    type="password"
                    placeholder={"Password"}
                    value={password}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />
                {/*{passwordError && <div className="invalid-feedback invalid-password">*/}
                    {/*Your password must include:*/}
                    {/*<ul>*/}
                        {/*<li>Must have 5-10 characters</li>*/}
                        {/*<li>1 Uppercase</li>*/}
                        {/*<li>1 Lowercase</li>*/}
                        {/*<li>a number</li>*/}
                        {/*<li>1 special character)</li>*/}

                    {/*</ul>*/}
                {/*</div>}*/}
            </div>
        )
    }
};

export default RegistrationPass;