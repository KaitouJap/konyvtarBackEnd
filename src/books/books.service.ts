import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class BooksService {
  constructor(private db: PrismaService){}

  create(createBookDto: CreateBookDto) {
    return this.db.book.create({
      data:{
        ...createBookDto
      }
    });
  }

  findAll(){
    return this.db.book.findMany();
  }

  findOne(id: number) {
    try{
      return this.db.book.findUniqueOrThrow({
        where: { id }
      });
    } catch(e: any){
      if(e instanceof PrismaClientKnownRequestError){
        if(e.code == "P2025"){
          throw new BadRequestException("Provided book ID vas invalid!");
        }
      }
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    try{
      return this.db.book.update({
        where: { id },
        data: { ...updateBookDto }
      });
    } catch(e: any){
      if(e instanceof PrismaClientKnownRequestError){
        if(e.code == "P2025"){
          throw new BadRequestException("Provided book ID vas invalid!");
        }
      }
    }
  }

  remove(id: number) {
    try{
      return this.db.book.delete({
        where: { id }
      });
    } catch(e: any){
      if(e instanceof PrismaClientKnownRequestError){
        if(e.code == "P2025"){
          throw new BadRequestException("Provided book ID vas invalid!");
        }
      }
    }
  }
}
