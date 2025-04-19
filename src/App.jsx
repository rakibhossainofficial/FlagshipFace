import React from "react";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline ">Navbar</h1>
      {/* Placeholder Component */}
      <Outlet />
      <h2 className="text-3xl font-bold  underline">Footer</h2>
    </>
  );
};

export default App;
