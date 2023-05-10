import React from 'react'
import {
  HiOutlineHome
}
from 'react-icons/hi'
import { SubMenu, MenuItem } from 'react-pro-sidebar'

const _nav = [
  {
    component: MenuItem,
    name: 'UTAMA',
    to: '/utama',
    icon: <HiOutlineHome />,
    badge: {
      color: 'info',
      text: 'PG',
    }
  },
  {
    component: SubMenu,
    name: 'TENTANG MUDA',
    to: '/tentang-muda',
    icon: <HiOutlineHome />,
    items: [
      {
        component: MenuItem,
        name: 'APA ITU MUDA',
        to: '/tentang-muda/apa-itu-muda',
      },
      {
        component: MenuItem,
        name: 'SIAPA MUDA',
        to: '/tentang-muda/siapa-muda',
      },
      {
        component: MenuItem,
        name: 'Q&A',
        to: '/tentang-muda/Q&A',
      },
    ],
  },
  {
    component: SubMenu,
    name: 'MEDIA',
    to: '/media',
    icon:<HiOutlineHome />,
    items: [
      {
        component: MenuItem,
        name: 'ARTIKEL & BERITA',
        to: '/media/artikel-berita',
      },
      {
        component: MenuItem,
        name: 'GALERI',
        to: '/media/galeri',
      },
      {
        component: MenuItem,
        name: 'SOSIAL',
        to: '/media/sosial',
      },
    ],
  },
  {
    component: MenuItem,
    name: 'MUDA',
    href: 'https://muda.my/',
    icon: <HiOutlineHome />
  },
]

export default _nav
