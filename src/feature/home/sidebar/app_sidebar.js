import React from 'react'

import { Sidebar, Menu } from 'react-pro-sidebar'

import { SidebarNav } from 'src/components/drawable/sidebar_nav/sidebar_nav'

// sidebar nav config
import navigation from './app_nav'

const AppSidebar = () => {
  return (
    <div>

      <Sidebar>
        <Menu>
          <SidebarNav items={navigation} />
        </Menu>
      </Sidebar>

    </div>
  )
}

export default React.memo(AppSidebar)