import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UerModule } from './uer/uer.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UerModule, BookmarkModule],
})
export class AppModule {}
