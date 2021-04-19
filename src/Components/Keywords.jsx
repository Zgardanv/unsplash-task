import React, { useState } from "react";
import { store } from "../App";
import { addKeyword, removeKeyword } from "../redux/actions";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const Keywords = ({ keywordHandler }) => {
  const [length, setLength] = useState(0);
  //Load current keyword from redux store
  const current = store.getState().searchWord;
  //Load saved keywords from redux store
  const savedQueries = store.getState().keywords;

  //Search keyword sending to redux store
  const sendToStore = () => {
    setLength((prev) => prev + 1);
    store.dispatch(addKeyword(current));
  };

  //Send to store item which should be removed
  const removeItem = (item) => {
    setLength((prev) => prev - 1);
    store.dispatch(removeKeyword(item));
  };

  return (
    <>
      <Container>
        {/* Show current searched keyword, if keywords was not searched return nothing  */}
        {current ? (
          <>
            <Typography variant="h6">Current Keyword:</Typography>
            <Keyword onClick={sendToStore} key={current}>
              {current}
              <AddCircleOutlineIcon />
            </Keyword>
          </>
        ) : (
          <></>
        )}
      </Container>

      <Container>
        {/* Show all saved keywords from redux store, if nothing was saved return nothing  */}
        {length ? (
          <>
            <Typography variant="h6">Saved Queries:</Typography>

            {savedQueries.map((item) => (
              <>
                <Keyword key={item}>
                  <span onClick={() => keywordHandler(item)}>{item}</span>
                  <RemoveCircleOutlineIcon onClick={() => removeItem(item)} />
                </Keyword>
              </>
            ))}
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Keywords;

const Container = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Keyword = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 3px;
  background: #b2dfdb;
  cursor: pointer;
  & svg {
    margin-left: 5px;
  }
`;
