import Mock from 'mockjs'
import {menus} from './data'

 Mock.mock('/ecnw-web/getmenu','post',menus)