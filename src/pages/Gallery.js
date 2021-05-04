import React, { useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Filter from "../components/Gallery/Filter";
import Body from "../components/Gallery/Body";
import { useHistory, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";

import { useSelector, useDispatch } from "react-redux";
import getAllCarsGallery from "../actions/getAllCarsGallery";
const Gallery = () => {
  const { isLoadingAllcarsGallery, allCarsGallery } = useSelector(
    (state) => state.getAllCarsGallery
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarsGallery());
  }, [dispatch]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledGallrey>
      {isLoadingAllcarsGallery && (
        <Lottie options={defaultOptions} height={100} width={100} />
      )}{" "}
      {!isLoadingAllcarsGallery && (
        <>
          <Filter />
          <Body />
        </>
      )}
    </StyledGallrey>
  );
};

const StyledGallrey = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
  min-height: 100vh;
`;

export default Gallery;
