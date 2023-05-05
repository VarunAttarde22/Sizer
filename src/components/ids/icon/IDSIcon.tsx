import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { EDFIcons, IconElement, home, doubleChevDown } from "@edf/core/icon";
import "@edf/core/icon/register.js";

EDFIcons.addIcons(home, doubleChevDown);

export const IDSIcon = createComponent({
  react: React,
  tagName: "edf-icon",
  elementClass: IconElement,
});
