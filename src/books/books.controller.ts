import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { Book } from 'src/entities/books';
 



export interface BooksService{

    getAllBooks:()=>Promise<Book[]>;
    getBookById:(id:string)=>Promise<Book>;
    deleteById:(id:string)=>Promise<void>;
    updateBook:(Book:Book,id:string)=>Promise<Book>;
    addBook:(Book:Book)=>Promise<Book>;

}


@Controller('books')
export class BooksController { 

    constructor(@Inject("BooksService") private readonly bookService:BooksService){

    }

    @Get()
    getAllBooks(){
        return this.bookService.getAllBooks()
    } 

    @Get(':id')
    getBookById(@Param('id') id:string){
        console.log(id)
        return this.bookService.getBookById(id)
    }

    @Post()
    addBook(@Body() book:any){
        return this.bookService.addBook(book)
    } 

    @Put(':id') 
    updateBook(@Body() data:any, @Param('id') id:string){
        return this.bookService.updateBook(data,id)
    }  

    @Delete(':id')
    deleteById(@Param('id') id:string ){ 
        return this.bookService.deleteById(id)
    }
}
