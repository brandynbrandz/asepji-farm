import PropTypes from "prop-types";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () => {
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
    email.value = "";
  };

  return (
    <>
      <div className="mc-newsletter-form space-mb--10">
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Enter email here"
          required
        />
        <button onClick={submit}>NOTIFY ME</button>
      </div>

      <div className="mailchimp-alerts">
        {status === "sending" && (
          <div className="mailchimp-submitting">sending...</div>
        )}
        {status === "error" && (
          <div
            className="mailchimp-error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mailchimp-success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </>
  );
};

const SubscribeEmail = ({ mailchimpUrl }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

SubscribeEmail.propTypes = {
  mailchimpUrl: PropTypes.string,
};

export default SubscribeEmail;
