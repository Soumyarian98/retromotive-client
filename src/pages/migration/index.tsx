import { Button } from "@mui/material";
import React from "react";
import { client } from "../../../sanity/lib/client";

const Migration = () => {
  const migrate = async () => {
    const groq = `*[_type == "product" && printifyId=="62458980fff8f03e506d31d1"][0]`;
    const products = await client.fetch(groq);
    console.log(products);
  };
  return (
    <div>
      <Button onClick={migrate}>Run Migration</Button>
    </div>
  );
};

export default Migration;

//pid: cljirgx4q1ahc0b2q1egl5uvi
//attributeId: cljirj52918xm0c2zeshmrnbe
//attributeEntityId: [cljirnx8d1b2s0b2qycwtjwa0, cljiro7yz198y0b2my876y4oj]
