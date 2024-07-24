import { useRef, useState } from "react";

const Otp = () => {
    const defalut_otp = "1234";

    const [verification, setVerification] = useState("Verify Account");

    const [clicked, setClicked] = useState(false);
    const [isVerified, setIsverified] = useState(false);

    const [OTP, setOTP] = useState(["", "", "", ""]);

    const ref = useRef([]);



    const otpFiller = (e, index) => {

        let val = e.target.value;
        if (val.length > 1) val = val.substring(val.length - 1);
        let data = OTP;

        if (val == "Backspace" || val == "Delete") {
            data[index] = "";
            setOTP(() => [...data]);
            if (index > 0) ref.current[index - 1].focus();
            return;
        }

        if (isNaN(val)) return;

        data[index] = val;

        setOTP(() => [...data]);
        if (index < 3) ref.current[index + 1].focus();



    }



    const otpValidater = () => {

        const val = OTP.join("");
        if (val.length !== 4) return;
        setClicked(true);
        if (val != defalut_otp) {
            setIsverified(false);
            setVerification("verification failed");

        }
        else {
            setVerification("verified");
            setIsverified(true);

        }


    }

    return (


        <div className=' bg-[#3F72AF] h-screen w-full'>

            <div className='mx-auto w-full sm:w-2/3 md:w-2/3 lg:w-2/5 right-0 left-0 p-1 text-center '>
                <div className='mt-10 '>
                    <div className="h-20 top-9  content-center items-center  w-full">
                        <h2 className='text-white   text-5xl font-semibold  '>Chai aur Code</h2>
                    </div>

                    <div className='bg-white px-6 py-10 rounded-md min-h-80'>
                        <div className="flex flex-col gap-3 ">
                            <div className='flex flex-col  gap-3 mx-auto left-0 right-0'>
                                <div>
                                    <h3 className='  text-[#000000] font-bold text-xl'>Mobile Phone Verification</h3>
                                </div>
                                <div>
                                    <p className="text-sm opacity-85 ">Enter the 4 - digit verification code that was sent to your phone number.</p>
                                </div>
                                <div className='grid  grid-flow-col gap-3'>

                                    {
                                        OTP.map((val, index) => {

                                            return <
                                                input
                                                key={index}
                                                ref={(current) => ref.current[index] = current}
                                                onChange = {(e) => otpFiller(e, index)}
                                                value={val}
                                                className={`h-20 w-20 bg-[#DBE2EF] rounded-lg border font-semibold text-4xl text-center 
                          ${clicked ? (isVerified ? 'border-[#23CF9B]' : 'border-[#EB2D5B]') : ''}`
                                                }

                                                type="text"

                                            />

                                        })
                                    }

                                </div>

                            </div>

                            <div>
                                <button

                                    onClick={otpValidater}
                                    className={`text-white w-full p-2 rounded-lg font-semibold 
                  ${clicked ? (isVerified ? 'bg-[#23CF9B]' : 'bg-[#EB2D5B]') : 'bg-[#112D4E]'}`}

                                >
                                    {verification}

                                </button>
                            </div>

                            {!isVerified && <div>
                                <p>Didn&#39;t receive code? <span className="font-semibold cursor-pointer">Resend</span> </p>

                            </div>}

                        </div>



                    </div>
                </div>

            </div>

        </div>
    )
}
export default Otp