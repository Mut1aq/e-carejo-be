import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  login(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.login(createAdminDto);
  }

  @Post('logout')
  logout() {
    return this.adminService.logout();
  }

  
}
