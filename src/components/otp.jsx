import { useRef, useState } from "react";

export default function Otp({ otpLength = 6 }) {
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  const onKeyHandleChange = (e, index) => {
    let key = e.key;
    let prevOtp = [...otp];
    if (key == "ArrowLeft" && index > 0) {
      ref.current[index - 1].focus();
      return;
    }
    if (key == "ArrowRight" && index < otp?.length - 1) {
      ref.current[index + 1].focus();
      return;
    }
    if (key == "Backspace") {
      prevOtp[index] = "";
      setOtp(prevOtp);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (isNaN(key)) return;

    prevOtp[index] = key;
    setOtp(prevOtp);
    if (index < otp?.length - 1) {
      ref.current[index + 1].focus();
    }
  };
  return (
    <div>
      <h1>OTP</h1>
      {otp?.map((data, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(ele) => (ref.current[index] = ele)}
            onKeyDown={(e) => onKeyHandleChange(e, index)}
            value={data}
            className="otp"
          />
        );
      })}
    </div>
  );
}
