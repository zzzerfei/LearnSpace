import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependinjectionService {

  doLog(action:any) {
    let uname = 'admin'
    let time = new Date().getTime()
    console.log(`管理员：${uname}于${time}进行了${action}`)
  }
}
