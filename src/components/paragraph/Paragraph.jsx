import React from "react";
import "./Paragraph.scss";
import PropTypes from "prop-types";

const Paragraph = ({ children, size, color, py }) => {
    let styles = {
        fontSize: `${size ? `${size}px` : ""}`,
        color: `${color ? `${color}` : ""}`,
    };

    return (
        <p className={`text-indent${!py ? "" : ` py-${py}`}`} style={styles}>
            {children}
        </p>
    );
};

Paragraph.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    py: PropTypes.number,
};

export default Paragraph;
