import React, { FC } from "react";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return (
    <a
      href="/"
      className="flex text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] text-black no-underline items-center font-semibold ">
      {title}{" "}
      <div className="ml-4 p-3 border-2 rounded-full stroke-black transition-all hover:bg-black hover:text-white">
        <FiArrowRight size={20} />
      </div>
    </a>
  );
};

export default Button;
