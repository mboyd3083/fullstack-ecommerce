import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      setKeyword("");
      navigate(`/search/${keyword.trim()}`);
      setKeyword("");
    } else {
      navigate(`/`);
    }
  };
  return (
    <form onSubmit={submitHandler} className="search_container">
      <AiOutlineSearch className="search_icon" />
      <input
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder={"Search Products..."}
        className="mr-sm-2 ml-sm-5 search_input"
      ></input>
    </form>
  );
};
export default SearchBox;
