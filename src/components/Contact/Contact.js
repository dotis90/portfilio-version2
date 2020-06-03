import React from "react";
import { contact } from "../../config";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title" style={{ textAlign: "center" }}>
        {contact.heading}
      </h2>
      <p className="contact-message">{contact.message}</p>
      <div className="p-5">
        {contact.icons.map((icon) => (
          <a
            key={icon.id}
            target="_blank"
            rel="noopener noreferrer"
            href={icon.url}
            aria-label={`My ${icon.image.split("-")[1]}`}
          >
            <i
              className={`contact-img fab ${icon.image}  fa-3x ${icon.id}`}
              // onMouseOver={() => toggleHover({ icon, event: "enter" })}
              // onMouseOut={() => toggleHover({ icon, event: "leave" })}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
