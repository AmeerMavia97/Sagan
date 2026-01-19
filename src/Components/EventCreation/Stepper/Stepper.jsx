import { CircleArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const StepLayout = ({ children, CurrentStep ,onBack }) => {

  const IsLogin = localStorage.getItem("tokens")


  return (
    <div className='bg-[#FFF5F7] px-10 py-7 h-full shadow-lg rounded-2xl'>
      {/* Header */}
      <div className='grid grid-cols-3 items-center'>
        <div>
          <img className='w-[190px] 2xl:w-[250.28px]' src="/Images/logo.png" alt="Logo" />
        </div>

        {/* Progress Bar */}
        {/* Progress Bar */}
        <div className="">
          {CurrentStep >= 1 &&
            <div className="flex justify-center items-center gap-4">
              <div onClick={()=>(onBack())}>
              <CircleArrowLeft className="size-5.5 2xl:size-7 text-[#FFB5C0] cursor-pointer" />
              </div>
              <div className="relative w-full max-w-lg">
                {/* Progress Line */}
                <div className="w-full h-0.5 2xl:h-1 bg-[#ffd3db] rounded-full" />
                {/* Steps */}
                {[0, 1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`absolute top-1/2 w-2 h-2 2xl:w-3 2xl:h-3 rotate-45 -translate-y-1/2 rounded-full ${step === 0 ? 'left-0' :
                      step === 1 ? 'left-1/3' :
                        step === 2 ? 'left-2/3' :
                          'left-full -translate-x-full'
                      } ${CurrentStep >= step ? 'bg-[#FFB5C0]' : 'bg-[#fec0cb]'}`}
                  />
                ))}
                {/* Filled Line */}
                <div
                  className="absolute top-[0.5px] left-0 h-0.5 2xl:h-1 bg-[#ffa9b6] rounded-full"
                  style={{ width: `${(CurrentStep / 3) * 100}%` }}
                />
              </div>
            </div>
          }

        </div>


        {/* Login Link */}
        <div className='text-end'>
          {
            !IsLogin && <h5 className='font-Inter text-[12.5px] 2xl:text-[17px] font-semibold'>
              Already have an account?{' '}
              <Link to="/login" className='text-[#E8798B] border-b-[2px] pb-1 border-[#E8798B]'>Log in</Link>
            </h5>
          }

        </div>
      </div>

      {/* Step Content */}
      <div className="mt-10">
        {children}
      </div>
    </div>
  );
};

export default StepLayout;
