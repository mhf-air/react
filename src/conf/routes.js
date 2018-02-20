// @flow

import { Main } from "../root/main/a.js"
import { About } from "../root/about/a.js"

export const routes = [
  { path: "/", exact: true, component: Main },

  { path: "/about", component: About },
]
