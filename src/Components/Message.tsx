import React from "react";

const getStyle = (props: any) => {
  let baseClass = "alert ";
  if (props.message.msgError) {
    baseClass = baseClass + "alert-danger"
  } else {
    baseClass = baseClass + "alert-primary"
  }
  return baseClass + " text-center"
}

interface Props {
  message: {
    msgBody: string;
    msgError: string;
  }
};

const Message: React.FC<Props> = (props: any) => {
  return (
    <div className={getStyle(props)} role="alert">
      {props.message.msgBody}
    </div>
  );
};

export default Message;
