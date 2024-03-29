import { createApp } from 'vue'

//import style file
import './styles/general.scss'
import * as bootstrap from 'bootstrap'


import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import {faXTwitter,faYoutube,faPinterest, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,faXTwitter,faYoutube,faPinterest,faFacebook,faInstagram)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
