import { RouteRecordRaw } from 'vue-router'

export interface IBreadcrumb {
  name: string
  path?: string
}

let firstMenu: any = null

export const mapRoutes = (userMenu: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 1. 先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  const asyncRouter = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((r) => r.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        asyncRouter(menu.children)
      }
    }
  }
  asyncRouter(userMenu)
  return routes
}

export const breadCrumbList = (userMenus: any[], currentPath: string) => {
  const breadCrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadCrumbs)
  return breadCrumbs
}

export const pathMapToMenu = (
  userMenus: any[],
  currentPath: string,
  breadCrumbs?: IBreadcrumb[]
): any => {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadCrumbs?.push({ name: menu.name })
        breadCrumbs?.push({ path: findMenu.url, name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
