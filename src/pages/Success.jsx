// Success.jsx

import iconList from "../imgs/icon-success.svg";

const Success = ({ email, toggleIsSubmitted }) => {

  
  return (
    <div className="bg-white rounded-md gap-4 w-full p-8 sm:min-h-0 text-xs sm:w-1/3">
      <img className="h-16" src={iconList} alt={iconList} />

      <h1 className="text-5xl text-darkGrey my-4">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        <span className="text-darkGrey font-bold">
          {` ${email}`}
        </span>
        . Please open it and click the button inside to confirm your
        subscription.
      </p>

      <button
        className="w-full bg-darkGrey text-white p-2 rounded-md my-8 hover:bg-tomato"
        type="submit"
        onClick={toggleIsSubmitted}
      >
        Dismiss message
      </button>
    </div>
  );
};
export default Success;
