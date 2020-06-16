import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
   


const contactMe = () => {

    return (
        <div id="ContactMe" className="contactMe">
            <h2 id="contactHead">CONTACT ME</h2>
            <hr id="hr2"/>
            <div className="form">
            <form class="form" action="https://formspree.io/mrgljjba" method="POST">
            <TextField color="primary" name="Name" label="Name" variant="outlined" required />
            <TextField color="primary" name="Email" label="Email" variant="outlined" required />
            <TextField color="primary" name="Phone" label="Phone" variant="outlined" />
            <TextField color="primary" name="Subject" label="Subject" variant="outlined" required />
            <div className="formRow2">
                <TextField color="primary" name="Message" label="Message" multiline rows={4} variant="outlined" required />
            </div>
                <Button type="submit" id="formButton" size="large" color="primary" variant="contained">SEND</Button>
            </form>
            <div className="logoButtons">
                <a href="https://github.com/JeradLollar19/" target="blank"><GitHubIcon /></a>
                <br />
                <br />
                <a href="https://www.linkedin.com/in/jeradlollar/" target="blank"><LinkedInIcon /></a>
                </div>
            </div>
        </div>
    )
}


export default contactMe;