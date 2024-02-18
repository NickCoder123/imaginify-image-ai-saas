import React from "react";

interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      {subTitle && <p className="p-16-regular mt-4">{subTitle}</p>}
    </React.Fragment>
  );
};

export default Header;
