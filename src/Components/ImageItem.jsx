import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

//single image component 

const ImageItem = ({ item }) => {
  const Image = styled(Grid)`
    background-image: url(${item.urls.small});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
  `;
  return <Image item xs={6} sm={4} md={3} lg={3} />;
};

export default ImageItem;
