import React from "react";
import './HomePageMobile.css'

import MobileHomePage from "./MobileHomePage";
import DeskTopHomePage from "./DeskTopHomePage";

export default function HomePage() {


  const isMobile = window.innerWidth <= 767;


  if(isMobile) return <MobileHomePage></MobileHomePage>;
  else return <DeskTopHomePage></DeskTopHomePage>;

}
