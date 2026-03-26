import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class MenuService {

 constructor(private prisma: PrismaService) {}

 // create main menu OR side menu
 async createMenu(data: any) {

  return this.prisma.menu.create({

   data: {

    name: data.name,

    description: data.description || null,

    parentId: data.parentId || null

   }

  })

 }

 // create item
 async createItem(data: any) {

  return this.prisma.item.create({

   data: {

    name: data.name,

    description: data.description,

    price: data.price,

    menuId: data.menuId

   }

  })

 }

 // get menus with sideMenus
 async getMenus() {

  return this.prisma.menu.findMany({

   where: {

    parentId: null

   },

   include: {

    items: true,

    children: {

     include: {

      items: true

     }

    }

   }

  })

 }

}