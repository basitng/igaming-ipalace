import * as React from "react";

interface DemoEmailTemplateProps {
  name: string;
  message: string;
  phone: string;
}

const DemoEmailTemplate: React.FC<Readonly<DemoEmailTemplateProps>> = ({
  name,
  message,
  phone,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
  </div>
);

export default DemoEmailTemplate;
