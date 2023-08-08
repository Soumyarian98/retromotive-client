import React, { FC, useState, useEffect } from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import { FiShare2 } from "react-icons/fi";

interface Props extends IconButtonProps {
  shareText: string;
  onClick?: () => void;
}

export const ShareButton: FC<Props> = ({ shareText, onClick, ...rest }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (navigator.share) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <IconButton
      {...rest}
      onClick={() => {
        if (onClick) onClick();
        navigator.share({
          title: "Retromotive",
          text: shareText,
        });
      }}>
      <FiShare2 />
    </IconButton>
  );
};
