import * as React from "react";

export interface HeadingProps { title: String; }

export const Heading = ({title}: HeadingProps) => <h1>{title}</h1>;