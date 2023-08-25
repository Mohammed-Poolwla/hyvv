import React from "react";

import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

export interface IInviteEmail {
  userName: string;
  userTitle: string;
  companyName: string;
}

const InviteEmail: React.FC<IInviteEmail> = ({
  userName,
  userTitle,
  companyName,
}) => {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi {userName}!</Text>
          <Text style={paragraph}>
            Welcome to our startup company! You are invited as {userTitle} at{" "}
            {companyName}
          </Text>
          <br />
          <a
            href="https://hyvv-client-dev.vercel.app/auth/login"
            style={button}
          >
            Go to Login
          </a>
        </Container>
      </Section>
    </Html>
  );
};

export default InviteEmail;

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const button = {
  fontSize: "15px",
  backgroundColor: "#08657E",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "15px",
  paddingRight: "15px",
  border: "1px",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
};
