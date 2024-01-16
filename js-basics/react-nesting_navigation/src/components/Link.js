import React from "react";

export default function Link({ children, href }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}

// const Link = ({ children }) => {
//   return <link>{children}</link>;
// };

// export default Link;
