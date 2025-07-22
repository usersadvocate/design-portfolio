import React from "react";
import "./../styles/components/plainButton.scss";

type PlainButtonProps = {
  label: string;
  onClick?: () => void;
};

export const PlainButton = ({ label, onClick }: PlainButtonProps) => {
  return (
    <button className="plain-button" onClick={onClick}>
      {label}
    </button>
  );
};
