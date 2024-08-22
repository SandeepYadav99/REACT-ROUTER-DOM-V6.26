import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigtion";

const Route = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Route;
