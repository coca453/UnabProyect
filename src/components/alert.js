import  send  from "../img/send-check.svg";
const Alert = ({ show, setShow,message,isOk }) => {
const showModal = show ? 'modal modal--certifications-2 modal--in show' : 'modal modal--certifications-2';


setTimeout(() => {
    setShow(false);
}, 2000);

return (
    <div className={'modal modal--certifications-2 modal--in show'}>
    <div className="modal__back">
        <div className="modal__front">
        <div class="modal__box alert_box">
            <div class="modal-content">
              <div class="modal__body alert_text">
                      { message ?
                      <p>{message}</p> :
                      <div className="spinner"></div>
                      }
                      { message && !message.startsWith('No') && <img className="alert_icon" alt="error-alert" width={40} height={40} src={send}/>}
              </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default Alert;
