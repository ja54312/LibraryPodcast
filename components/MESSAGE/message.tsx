import React from 'react'

const Message = ({ msg, bgColor }) => {
    let styles = {
      padding: "1rem",
      marginBottom: "1rem",
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      backgroundColor: bgColor,
    };
  
    return (
      <div className='message-error'>
        <p dangerouslySetInnerHTML={{ __html: msg }} />
      </div>
    );
  };

export default Message