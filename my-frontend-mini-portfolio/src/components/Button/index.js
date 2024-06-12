import React from 'react';
import Link from 'next/link'
import { Icon } from '@iconify/react';

const Button = props => (
  <Link href={props.href} className={"bg-[#DF8601] hover:bg-[#BD7201] cursor-pointer w-fit max-h-[44px] px-[1.5em] py-[1.375em] flex items-center justify-center gap-2 rounded-lg"}>
    {
      props.icon ? <Icon icon={props.icon} style={{ fontSize: '1.5em' }} /> : null
    }    
    {props.text}
  </Link>
);

export default Button;
