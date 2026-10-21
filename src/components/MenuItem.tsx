import React from 'react'
import type { MenuItem } from '../types'

type MenuItemProps = {
    item: MenuItem;
  addItem: (item:MenuItem) => void
}


export default function MenuItem({item,addItem}: MenuItemProps) {
  return (
<button onClick={()=>addItem(item)} className="flex justify-between items-center w-full">
    <p>{item.name}</p>
    <p>${item.price}</p>
    
</button>

  );
}
