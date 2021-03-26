const Message = ({ variant, children }) => {
  return (
    <div className={`alert alert-${variant} alert-dismissible`} role="alert">
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
