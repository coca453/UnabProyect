import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  setCaptcha: (value: boolean) => void;
  captchaAlert: boolean;
  setCaptchaAlert: (value: boolean) => void;
}

const Captcha = ({
  setCaptcha,
  captchaAlert,
  setCaptchaAlert,
}: CaptchaProps) => {
  const handleClick = () => {
    setCaptcha(true);
    setCaptchaAlert(false);
  };

  return (
    <>
      <div className="form__element">
        <div className="form__title">
          Captcha
          {captchaAlert && (
            <div className="flex">
              <div className="validationErrorText">complete el captcha</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="bi bi-exclamation-diamond-fill error_icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#FF0000"
                  d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
            </div>
          )}
        </div>

        <ReCAPTCHA
          sitekey="6Lfd5u8mAAAAAGu0hSeZJV3b9bkzHk5ej0MtIOWm"
          // sitekey="6LcImSckAAAAAAYnd6U_kkJ_NtvU6UBXVNaUaHSx"
          onChange={handleClick}
        />
      </div>
    </>
  );
};

export default Captcha;
