// @flow

import { Root } from "../root/a.js"
import { About } from "../root/about/a.js"

export const routes = [
  { path: "/", exact: true, component: Root },

  { path: "/about", component: About },
]
