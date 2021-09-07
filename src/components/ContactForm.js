import React from "react";

const ContactForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="form-group">
                <label htmlFor="emailInput">Password</label>
                <input type="email" className="form-control" id="emailInput" />
            </div>
            <div className="form-group">
                <label htmlFor="messageTextArea">Message</label>
                <textarea
                    className="form-control"
                    id="messageTextArea"
                    rows="3"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
