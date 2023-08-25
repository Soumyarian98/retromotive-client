import { GetStaticProps } from "next";
import React from "react";
import { client } from "../../../sanity/lib/client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
import PortableText from "react-portable-text";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "policy" && contentHandle.current == "${params?.id}"][0]`;
  const res = await client.fetch(query);
  return {
    props: res,
  };
};

const Policy = (props: any) => {
  return (
    <Container sx={{ pt: { xs: "100px", md: "128px" }, mb: 4 }}>
      <Typography
        sx={{ mb: 2, fontSize: { xs: "18px", md: "24px" } }}
        textTransform="uppercase"
        fontWeight={700}>
        {props.title}
      </Typography>
      <Stack>
        {props.content.map((item: any, index: any) => (
          <Accordion>
            <AccordionSummary expandIcon={<FiChevronDown />}>
              <Typography variant="body2" fontWeight={600}>
                {index + 1}. {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component={PortableText}
                content={item.description}
                sx={{
                  fontSize: "14px",
                  li: {
                    ml: 2,
                  },
                }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
};

export default Policy;
