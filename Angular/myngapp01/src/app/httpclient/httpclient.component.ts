import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.sass']
})
export class HttpclientComponent implements OnInit {

  constructor(private http:HttpClient) { // 声明依赖的一个服务对象
    console.log(http)
    this.http = http
  }

  ngOnInit(): void {
  }
  
  loadProduct() { // 加载资料
    let url = 'http://jsonplaceholder.typicode.com/posts'
    this.http.get(url).subscribe((res) => {
      console.log('得到了订阅的异步响应消息')
      console.log(res)
    })
  }
}
