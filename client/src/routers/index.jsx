import DetailSan from "../pages/detailSan/DetailSan"
import DetailTeam from "../pages/detailTeam/DetailTeam"
import Home from "../pages/home/Home"
import SanBong from "../pages/sanBong/SanBong"
import Teams from "../pages/teams/Teams"
import {Login} from "../pages/login/Login"
import LoginLayout from "../components/layout/LoginLayout"
import { Profile } from "../pages/profile/Profile"
import { Register } from "../pages/register/Register"
import { ForgetPass } from "../components/forgetPass/ForgetPass"
import { ConfirmOTP } from "../components/confirmOTP/ConfirmOTP"
import { ChangePass } from "../components/changePass/ChangePass"


const publicRouter = [
  // home
  {path:'/', component:Home},
  // sân bóng
  {path:'/pitch', component:SanBong},
  {path:'/pitch/:id', component: DetailSan},
  // đội bóng
  {path:'/teams', component:Teams},
  {path:'/teams/:id', component:DetailTeam},
  // đăng kí, đăng nhập, quên mật khẩu
  {path:'/login', component:Login, layout:LoginLayout},
  {path:'/register', component:Register, layout:LoginLayout},
  {path:'/forget', component:ForgetPass, layout:LoginLayout},
  {path:'/forget/confirmOtp/:id', component:ConfirmOTP, layout:LoginLayout},
  {path:'/forget/confirmOtp/:id/changePass', component:ChangePass, layout:LoginLayout},
  // profile
  {path:'/profile/:id', component:Profile}
]

const priviteRouter = [

]

export {publicRouter, priviteRouter}