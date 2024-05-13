// App.jsx

import { useState } from "react";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function toggleIsSubmitted() {
    setIsSubmitted(!isSubmitted);
  }

  return (
    <section className="flex justify-center items-center sm:min-h-screen bg-coalGrey">
      {/* {isSubmitted ? (
        <SignUp
          setEmail={setEmail}
          toggleIsSubmitted={toggleIsSubmitted}
        />
      ) : (
        <Success email={email} toggleIsSubmitted={toggleIsSubmitted} />
      )} */}

      {!isSubmitted && (
        <SignUp setEmail={setEmail} toggleIsSubmitted={toggleIsSubmitted} />
      )}

      {email && <Success email={email} toggleIsSubmitted={toggleIsSubmitted} />}
    </section>
  );
}
