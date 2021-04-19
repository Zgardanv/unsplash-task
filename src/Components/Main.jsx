import React, { useState, useRef } from "react";
import { store } from "../App";
import axios from "axios";
import { InputBase, Button, Container, GridList } from "@material-ui/core";
import ImageItem from "./ImageItem";
import styled from "styled-components";
import { currentKeyword } from "../redux/actions";
import Keywords from "./Keywords";
import Spinner from "./Spinner";

//Main component

const Main = () => {
  const [keyword, setKeyword] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noItems, setNoItems] = useState(false);
  let form = useRef(null);

  //get images by keyword, result number can be changed 'per_page' number
  const getImages = (keyword) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}&per_page=12`
      )
      .then((response) => {
        if (response.data.results.length) {
          setNoItems(false);
          setItems(response.data.results);
          setLoading(false);
        } else {
          setLoading(false);
          setNoItems(true);
        }
      });
  };

  //Search button click event
  const handleSubmit = () => {
    if(keyword){
      setLoading(true);
      getImages(keyword);
      store.dispatch(currentKeyword(keyword));
      form.current.reset();
      setKeyword('');
    }
  };

  //Submit form controller
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  //Saved query item on click event
  const keywordHandler = (item) => {
    store.dispatch(currentKeyword(item));
    setLoading(true);
    getImages(item);
  };

  const Fetched = () => {
    if (loading) {
      //if data is loading, return progress spinner
      return <Spinner />;
    } else if (noItems) {
      //if nothing found, return message for user
      return <Spinner notFound={true} />;
    } else {
      //on success data loaded show images
      return (
        <GridList>
          {items.map((item) => (
            <ImageItem item={item} key={item.id} />
          ))}
        </GridList>
      );
    }
  };


  return (
    <div>
      <Container>
        <FormWrapper>
          {/* Keyword search form with 'Search' button */}
          <Form ref={form} onSubmit={(e) => handleSubmitForm(e)}>
            <InputBase  onChange={(e) => setKeyword(e.target.value)} />
            <Button variant="contained" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </FormWrapper>

        {/* Show keywords, current and saved */}
        <Keywords keywordHandler={keywordHandler} />

        {/* Show result */}
        <Fetched />

      </Container>
    </div>
  );
};

export default Main;

const FormWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  padding: 5px;
  border: 1px solid #b2dfdb;
  border-radius: 5px;
  button {
    background-color: #80cbc4;
    &:hover {
      background-color: #80cbc4aa;
    }
  }
`;
