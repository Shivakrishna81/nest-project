import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';





@Module({
  imports: [BooksModule],
  controllers: [BooksController],
  providers: [{
    provide:"BooksService",
    useClass:BooksService
  }],
})
export class AppModule {}
 