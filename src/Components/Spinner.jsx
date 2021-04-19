import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Spinner = ({ notFound }) => {
  if (notFound) {
    //return simple message for user to know that there are not such images
    return <LoaderContainer>Oooops! Nothing Found :(</LoaderContainer>;
  }
  //return animated progress spinner
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export default Spinner;

const LoaderContainer = styled.div`
  justify-content: center;
  display: flex;
  margin: 20vh 0;
`;

const Loader = styled(CircularProgress)`
  color: #00695c;
  width: 70px;
  height: 70px;
`;
