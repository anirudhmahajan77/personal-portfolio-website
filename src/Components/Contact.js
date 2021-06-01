import React from "react";
import "../Stylesheets/Contact.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import emailjs from "emailjs-com";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            open: false,
        }
    }

    submitForm = () => {
        emailjs.send("service_9dglmz6", "template_xi7wqn1", {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }, "user_E5VtFEB47Kfk24ddpkhu8");

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            open: true,
        })
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
          }
      
          this.setState({
              open: false,
          });
    }

    render() {
        return (
            <div>
                <div>
                    <p className="message">Have a query?<br />Let's Connect.</p>
                </div>
                <div>
                    <form
                        onSubmit={this.submitForm}
                        className="form"
                        noValidate
                        autoComplete="off">
                        <TextField required id="outlined-basic" label="Name" value={this.state.name} onChange={(val) => { this.setState({ name: val.target.value }) }} variant="outlined" className="inputField" />
                        <p className="margin"></p>
                        <TextField required id="outlined-basic" type="email" value={this.state.email} onChange={(val) => { this.setState({ email: val.target.value }) }} label="Your Email" variant="outlined" className="inputField" />
                        <p className="margin"></p>
                        <TextField required id="outlined-basic" label="Subject" value={this.state.subject} onChange={(val) => { this.setState({ subject: val.target.value }) }} variant="outlined" className="inputField" />
                        <p className="margin"></p>
                        <TextField required id="outlined-basic" label="Your Message" value={this.state.message} onChange={(val) => { this.setState({ message: val.target.value }) }} variant="outlined" multiline className="inputField" />
                        <p className="margin"></p>
                        <Button onClick={this.submitForm} variant="contained" color="primary" className="submitButton">
                            Let's Connect
                        </Button>
                        <p className="buttonMargin"></p>
                    </form>
                </div>
                <Snackbar 
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={this.state.open} autoHideDuration={5500} onClose={this.handleClose}>
                    <MuiAlert onClose={this.handleClose} severity="success" variant="filled" elevation="6">
                        Email Sent Successfully!
                </MuiAlert>
                </Snackbar>
            </div>
        )
    }
}

export default Contact;