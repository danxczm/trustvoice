const Footer = ({ name, email, website, phone, bankAccount, bankName }) => {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <span className="font-bold">Your name: {name}</span>
        </li>
        <li>
          <span className="font-bold">Your email: {email}</span>
        </li>
        <li>
          <span className="font-bold">Phone number: {phone}</span>
        </li>
        <li>
          <span className="font-bold">Bank: {bankName}</span>
        </li>
        <li>
          <span className="font-bold">Account holder: {name}</span>
        </li>
        <li>
          <span className="font-bold">Account number: {bankAccount}</span>
        </li>
        <li>
          <span className="font-bold">
            Website:{" "}
            <a href={website} target="_blank" rel="nooper noreferrer">
              {website}
            </a>
          </span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
