import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert != null && (
      <div className={`alert aler-${alertContext.alert.type}`}>
        <i className='fas fa-info-circle' /> {alertContext.alert.message}
      </div>
    )
  );
};
export default Alert;
