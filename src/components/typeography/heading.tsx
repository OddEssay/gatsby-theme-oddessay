import * as React from "react";
import './headings.css'
import '../../layouts/index.css'

export interface HeadingProps { title: String; }

export const Heading = ({title}: HeadingProps) => <h1 className='heading'>{title}</h1>;

