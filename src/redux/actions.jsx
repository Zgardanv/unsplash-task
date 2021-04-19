import { ADDKEYWORD, REMOVEKEYWORD, CURRENTKEYWORD } from "./types";

export function addKeyword(newWord) {
  return {
    type: ADDKEYWORD,
    payload: newWord,
  };
}
export function removeKeyword(romoveWord) {
  return {
    type: REMOVEKEYWORD,
    payload: romoveWord,
  };
}
export function currentKeyword(searchWord) {
  return {
    type: CURRENTKEYWORD,
    payload: searchWord,
  };
}
