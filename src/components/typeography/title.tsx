import * as React from "react";

import '../../layouts/index.css'

export interface TitleProps { title: string; }

export const Title = ({title}: TitleProps) => <h3 className='title' style={{fontFamily: 'Oswald'}}>{title}</h3>;

