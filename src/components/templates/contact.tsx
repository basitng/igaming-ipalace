import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  message: string;
}

const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  message,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
  </div>
);

export default ContactEmailTemplate;
