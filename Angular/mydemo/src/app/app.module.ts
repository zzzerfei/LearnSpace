import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, todoRoutedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero/components/hero-detail/hero-detail.component';
import { MessageComponent } from './components/hero/components/message/message.component';
import { DashboardComponent } from './components/hero/components/dashboard/dashboard.component';
import { ListComponent } from './components/hero/components/list/list.component';
import { SearchComponent } from './components/hero/components/search/search.component';
import { TodoBoardComponent } from './components/todo/component/todo-board/todo-board.component';
import { TodoListComponent } from './components/todo/component/todo-list/todo-list.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    TodoComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    ListComponent,
    SearchComponent,
    TodoBoardComponent,
    TodoListComponent,
    ...todoRoutedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // 以 InMemoryDataService 为参数对其进行s配置
    // forRoot() 配置方法接收一个 InMemoryDataService 类来初始化内存数据库。
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{ delay: 500 }
    ),
    
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
