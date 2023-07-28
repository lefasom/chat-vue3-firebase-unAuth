import App from './App.vue'
import router from './router/router'
/* Set up using Vue 3 */
import { createApp } from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faArrowLeft,
    faPaperPlane,
    faTrash,
    faComments,
    faGlobe,
    faLock,
    faLockOpen,
    faPerson
} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(
    faArrowLeft,
    faPaperPlane,
    faTrash,
    faComments,
    faGlobe,
    faLock,
    faLockOpen,
    faPerson

)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')