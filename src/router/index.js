import Vue from 'vue'
import Router from 'vue-router'
import Splash from '../components/Splash'
import Main from '../components/Main'
import Settings from '../components/Settings'
import Socialization from '../components/Socialization'
import Calendar from '../components/Calendar'

import Profile from '../components/Profile'
import PublicProfile from '../components/PublicProfile'
import EditProfile from '../components/Profile/EditProfile'
import EditFirstTime from '../components/Profile/EditFirstTime'

import Chat from '../components/Socialization/Chat'
import Messaging from '../components/Socialization/Messaging'
import Connections from '../components/Socialization/Connections'

import Materials from '../components/Materials'

import Material from '../components/Materials/Material'

import Series from '../components/Materials/Series'
import Lecture from '../components/Materials/Lecture'
import Exam from '../components/Materials/Exam'
import Part from '../components/Materials/Part'
import Recommendation from '../components/Materials/Recommendation'

import LectureDetails from '../components/Materials/LectureDetails'

Vue.use(Router)
export default new Router({
  // base: window.location.pathname,
  routes: [
    { path: '/', name: 'Splash', component: Splash },
    { path: '/main', name: 'Main', component: Main },
    { path: '/Settings', name: 'Settings', component: Settings },
    { path: '/Calendar', name: 'Calendar', component: Calendar },
    { path: '/profile', name: 'PrivateProfile', component: Profile },
    { path: '/profile/:id', name: 'PublicProfile', component: PublicProfile },
    { path: '/profile/edit', name: 'EditProfile', component: EditProfile },
    { path: '/profile/edit/first', name: 'EditFirstTime', component: EditFirstTime },
    
    { path: '/Connections/:type', name: 'Connections',component: Connections},
    { path: '/Chat/:type', name: 'Chat',component: Chat},
    { path: '/Chat/:type/:id', name: 'Messaging', component: Messaging },
    
    { path: '/Socialization', name: 'Socialization',component: Socialization},

    { path: '/Materials', name: 'Materials',component: Materials},
    { path: '/Materials/:id',component: Material, children: [
      { path: '/',name: 'Series',component: Series},
      { path: 'Lectures', name: 'Lectures',component: Lecture},
      { path: 'Exams', name: 'Exams',component: Exam},      
      { path: 'Parts', name: 'Parts',component: Part},
      { path: 'Recommendations', name: 'Recommendations',component: Recommendation},
    ]},
    { path: '/Materials/:id/Lectures/:lid', name: 'LectureDetails',component: LectureDetails},
    
    { path: '*', name: 'Redirect', component: Main },
  ],
  mode: 'history'
})
