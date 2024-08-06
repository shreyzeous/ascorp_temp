import Footer from "../LoginHeaderFooter/Footer";
import Login1 from "../../assets/image.svg";
import Header from "../LoginHeaderFooter/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleForgotPassword = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex overflow-hidden w-full flex-col bg-white">
        <Header />
        <main className="-mt-1 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-start px-20 py-28 w-full bg-neutral-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <img
                  src={Login1}
                  className="object-contain max-w-full aspect-[1.03] w-[492px]"
                />
              </div>
            </section>
            <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start px-20 py-28 mx-auto w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
                <div className="flex flex-col items-center ml-16 text-center max-md:ml-2.5">
                  <h2 className="text-3xl font-semibold text-black">
                    Sign Up as Candidate
                  </h2>
                  <p className="mt-1 text-lg text-zinc-800">
                    Enter your credential to access your account.
                  </p>
                </div>
                <form className="w-full">
                  <div className="mt-10">
                    <label
                      htmlFor="emailPhone"
                      className="text-base font-medium text-zinc-800"
                    >
                      Enter username
                    </label>
                    <div className="flex flex-wrap gap-3 mt-2.5 text-base whitespace-nowrap bg-white rounded-md text-zinc-800">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b49eb4107938c3993c0a92c21c5493620798cdf574699e6ea2bbcfac03220e1?apiKey=768aa6c3aa734c7ea180156217d06508&&apiKey=768aa6c3aa734c7ea180156217d06508"
                        alt=""
                        className="object-contain shrink-0 rounded-md aspect-[1.09] w-[60px]"
                      />
                      <input
                        type="text"
                        id="emailPhone"
                        placeholder="Username"
                        className="flex-auto my-auto max-md:max-w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <label
                      htmlFor="emailPhone"
                      className="text-base font-medium text-zinc-800"
                    >
                      Enter registered email/Phone
                    </label>
                    <div className="flex flex-wrap gap-3 mt-2.5 text-base whitespace-nowrap bg-white rounded-md text-zinc-800">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b49eb4107938c3993c0a92c21c5493620798cdf574699e6ea2bbcfac03220e1?apiKey=768aa6c3aa734c7ea180156217d06508&&apiKey=768aa6c3aa734c7ea180156217d06508"
                        alt=""
                        className="object-contain shrink-0 rounded-md aspect-[1.09] w-[60px]"
                      />
                      <input
                        type="text"
                        id="emailPhone"
                        placeholder="Email/Phone"
                        className="flex-auto my-auto max-md:max-w-full"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        title="Please enter a valid email address"
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="false"
                        typeof="email"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-zinc-800"
                    >
                      Password
                    </label>
                    <div className="flex flex-wrap gap-5 justify-between py-px pr-3.5 pl-px mt-2 max-w-full text-base whitespace-nowrap bg-white rounded-md text-zinc-800 w-[536px]">
                      <div className="flex gap-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed8dc5ff028c3bbbd7b53d9a83be553625f22883caec78085c20fe8899256dc7?apiKey=768aa6c3aa734c7ea180156217d06508&&apiKey=768aa6c3aa734c7ea180156217d06508"
                          alt=""
                          className="object-contain shrink-0 rounded-none aspect-[1.11] w-[60px]"
                        />
                        <input
                          id="password"
                          placeholder="Password"
                          className="my-auto"
                          type="password"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f718e70e136076efd716328940c6ac879c9c34ffad0a251ea7b7ede7d6a0eab5?apiKey=768aa6c3aa734c7ea180156217d06508&&apiKey=768aa6c3aa734c7ea180156217d06508"
                        alt="Show/Hide password"
                        className="object-contain shrink-0 my-auto aspect-square w-[26px]"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="Confirm Password"
                      className="text-base font-medium text-zinc-800"
                    >
                      Confirm Password
                    </label>
                    <div className="flex flex-wrap gap-5 justify-between py-px pr-3.5 pl-px mt-2 max-w-full text-base whitespace-nowrap bg-white rounded-md text-zinc-800 w-[536px]">
                      <div className="flex gap-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed8dc5ff028c3bbbd7b53d9a83be553625f22883caec78085c20fe8899256dc7?apiKey=768aa6c3aa734c7ea180156217d06508&&apiKey=768aa6c3aa734c7ea180156217d06508"
                          alt=""
                          className="object-contain shrink-0 rounded-none aspect-[1.11] w-[60px]"
                        />
                        <input
                          id="ConfirmPassword"
                          placeholder="Confirm Password"
                          className="my-auto"
                          type="password"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f718e70e136076efd716328940c6ac879c9c34ffad0a251ea7b7ede7d6a0eab5?apiKey=768aa6c3aa734c7ea180156217d06508&&apiKey=768aa6c3aa734c7ea180156217d06508"
                        alt="Show/Hide Confirm Password"
                        className="object-contain shrink-0 my-auto aspect-square w-[26px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-10 mt-3 max-w-full text-base text-emerald-600 w-[536px]">
                    <div className="flex flex-1 gap-2">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        className="shrink-0 self-start w-5 h-5 bg-white rounded-sm"
                      />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div>
                      <button onClick={handleForgotPassword}>
                        Forgot Password
                      </button>

                      {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                          <div
                            className="bg-white   
 p-8 rounded shadow-md"
                          >
                            <h2 className="text-xl font-bold mb-4">
                              Forgot Password
                            </h2>
                            <form>
                              <label htmlFor="email">
                                Enter Registered Email/Phone
                              </label>
                              <input
                                type="text"
                                id="email"
                                className="border p-2 w-full"
                              />
                              <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              >
                                {" "}
                                Submit
                              </button>
                            </form>
                            <button onClick={handleClose} className="mt-4">
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="px-16 py-3.5 mt-6 max-w-full text-xl font-semibold text-center text-white bg-emerald-600 rounded-md w-[538px] max-md:px-5"
                  >
                    Sign Up
                  </button>

                  <div className="mt-6 flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="shrink-0 w-5 h-5 bg-white rounded-sm"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 flex text-base text-zinc-800 items-center"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-emerald-600 ml-1">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </form>
                <p className="self-center mt-7 text-sm text-black">
                  <span className="text-base text-zinc-800">
                    Already have an account?{" "}
                  </span>
                  <button className="text-base font-semibold text-emerald-600">
                    <Link to={"/login"}>Sign In as Candidate</Link>
                  </button>
                </p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
