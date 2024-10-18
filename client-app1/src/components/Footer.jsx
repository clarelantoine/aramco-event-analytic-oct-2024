import styled from "styled-components";

export default function Footer({ text }) {
  const Footer = styled.footer`
    padding: 40px 0 50px;
    margin-top: auto;
    font-size: 15px;
  `;

  return (
    <Footer>{`Copyrights © ${new Date().getFullYear()} | ${text}`}</Footer>
  );
}
