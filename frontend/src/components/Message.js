import PropTypes from "prop-types";

const Message = ({ variant, dismissible, children }) => {
    return (
        <div
            className={`alert alert-${variant} ${
                dismissible ? `alert-dismissible fade show` : ""
            }`}
            role="alert"
        >
            {children}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
};

Message.defaultProps = {
    variant: "info",
    dismissible: false,
};

Message.propTypes = {
    dismissible: PropTypes.bool,
    variant: PropTypes.string.isRequired,
};

export default Message;
