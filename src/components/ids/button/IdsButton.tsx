import React from "react";
import { createComponent } from "@lit-labs/react";
import { ButtonElement } from "@edf/core/button";
import "@edf/core/button/register.js";

export const IDSButton = createComponent({
  react: React,
  tagName: "edf-button",
  elementClass: ButtonElement,
});
