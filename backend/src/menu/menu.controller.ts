import { Body, Controller, Get, Post } from '@nestjs/common'
import { MenuService } from './menu.service'

@Controller('menu')
export class MenuController {

 constructor(private menuService: MenuService) {}

 // create main menu
 @Post()
 createMenu(@Body() body: any) {

  return this.menuService.createMenu(body)

 }

 // create side menu
 @Post('submenu')
 createSubMenu(@Body() body: any) {

  return this.menuService.createMenu(body)

 }

 // create item
 @Post('item')
 createItem(@Body() body: any) {

  return this.menuService.createItem(body)

 }

 // get menu tree
 @Get()
 getMenus() {

  return this.menuService.getMenus()

 }

}