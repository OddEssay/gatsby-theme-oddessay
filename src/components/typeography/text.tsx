import * as React from "react";
import './text.css'
import '../../layouts/index.css'

export interface TextProps { children: React.ReactNode; }

export const Text = ({children}: TextProps) => <p className='text-base'>{children}</p>;

