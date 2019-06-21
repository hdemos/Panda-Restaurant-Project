import React,{Component} from 'react'

class RegistrationPassRetype extends Component {
    state = {
        retypePassword: ""
    };

    componentWillReceiveProps(nextProps) {
        this.setState({retypePassword: nextProps.retypePassword})
    }

    onBlur = (e) => {
        this.props.onAttributeUpdate(
            { retypePassword: this.state.retypePassword }
        )
    };

    onChange = (e) => {
        this.setState({retypePassword: e.target.value})
    }

    render() {
        const { disabled, retypePasswordError } = this.props;
        const { retypePassword } = this.state;
        return (
            <div className="form-group row">
                <label htmlFor="retypePassword" className="col-sm-2 col-form-label"></label>
                <input
                    disabled={disabled}
                    required
                    className={`col-sm-6 form-control registration${retypePasswordError ? "is-invalid" : ""}`}
                    type="retypePassword"
                    placeholder={"Retype Password"}
                    value={retypePassword}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />
                {retypePasswordError && <div className="invalid-feedback invalid-password">Your password must include:
                    <ul>
                        <li>Must have 5-10 characters</li>
                        <li>1 Uppercase</li>
                        <li>1 Lowercase</li>
                        <li>a number</li>
                        <li>1 special character)</li>

                    </ul>
                </div>}
            </div>
        )
    }
};

export default RegistrationPassRetype;