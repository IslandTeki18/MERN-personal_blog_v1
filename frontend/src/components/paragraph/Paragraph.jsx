import React from "react";
import "./Paragraph.scss";
import PropTypes from "prop-types";

const Paragraph = ({ children, size, py }) => {
    return (
        <p
            className={`text-indent${!py ? "" : ` py-${py}`}`}
            style={{ fontSize: `${size}px` }}
        >
            {children}
        </p>
    );
};

Paragraph.propTypes = {
    size: PropTypes.number,
};

export default Paragraph;
