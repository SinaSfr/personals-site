import React from 'react'
import Github from '../../assets/icons/Github'
import Instagram from '../../assets/icons/Instagram'
import Facebook from '../../assets/icons/Facebook'
import Twitter from '../../assets/icons/Twitter'

export default function SocialmediaIcon() {
    const dbIcon = [
        {id: 1, icon: <Github/>},
        {id: 2, icon: <Instagram/>},
        {id: 3, icon: <Facebook/>},
        {id: 4, icon: <Twitter/>}
    ]
  return (
    <div className='flex gap-4'>
        {dbIcon.map((item) => (
            <span key={item.id}>{item.icon}</span>
        ))}
    </div>
  )
}
