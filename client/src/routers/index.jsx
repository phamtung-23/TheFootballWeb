import DetailSan from "../pages/detailSan/DetailSan"
import DetailTeam from "../pages/detailTeam/DetailTeam"
import Home from "../pages/home/Home"
import SanBong from "../pages/sanBong/SanBong"
import Teams from "../pages/teams/Teams"


const publicRouter = [
  {path:'/', component:Home},
  {path:'/pitch', component:SanBong},
  {path:'/pitch/:id', component: DetailSan},
  {path:'/teams', component:Teams},
  {path:'/teams/:id', component:DetailTeam},
]

const priviteRouter = [

]

export {publicRouter, priviteRouter}