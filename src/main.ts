import { createSSRApp } from "vue"
import App from "./App.vue"
import createRouter from "./router"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const createApp = () => {
  /**
   * use createSSRApp to render the Vue App on the server
   * and send it to the user to do the hydration process
   */
  const app = createSSRApp(App)
  const router = createRouter()
  const vuetify = createVuetify({
    components,
    directives,
  })

  app.use(router)
  app.use(vuetify)
  
  return {
    app,
    router
  }
}
