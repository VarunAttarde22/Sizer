import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { MastheadElement } from "@edf/core/masthead";
import("@edf/core/masthead/register.js");

export const IDSHeader: any = createComponent({
  react: React,
  tagName: "edf-masthead",
  elementClass: MastheadElement,
});
