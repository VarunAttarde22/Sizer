import React from 'react';
import { MyProvider } from "../context/Context";
import { AddonsLayout } from "../components/addons/AddonsLayout";

export default function BootstrapComponent():JSX.Element {
  return (
    <>
      <MyProvider>
        <AddonsLayout />
      </MyProvider>
    </>
  );
}
