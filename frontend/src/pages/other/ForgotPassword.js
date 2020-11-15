import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <section class="bg-login">
        {/* <!-- <div class="bg-overlay"></div> --> */}
        <div class="login-table">
          <div class="login-table-cell">
            <div class="container">
              <div class="row justify-content-center mt-4">
                <div class="col-lg-4">
                  {/* <!-- <div class="text-center page-heading">
                  <h1 class="text-white">Asepji</h1>
                  <p class="text-white">Organic Food Password Recovery</p>
                </div>{" "}
                --> */}
                  <div class="bg-white p-4 mt-5 rounded">
                    <div class="text-center">
                      <h4 class="font-weight-bold mb-3">Asepji</h4>
                    </div>
                    <h6 class="text-center text-muted font-weight-normal forgot-pass-txt">
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </h6>
                    <form class="login-form">
                      <div class="row">
                        <div class="col-lg-12 mt-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div class="col-lg-12 mt-4 mb-2">
                          <button class="btn btn-default w-100">
                            Reset your Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="text-center mt-3">
                    <p>
                      <small class="text-black mr-2">
                        Already have account?
                      </small>{" "}
                      <Link
                        to="/login-register"
                        class="text-black font-weight-bold"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
