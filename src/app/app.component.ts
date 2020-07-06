/**
 * NOTICE: This example is based on `9.x`, 8.x version please go to: https://stackblitz.com/edit/ng-alain-setup-8
 * If you want to switch the official theme, please modify `styles` path in `angular.json` file, likt this:
 * ```json
 * "node_modules/@delon/theme/{default|dark|compact}.css",
 * ```
 */

import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { STColumn, STData } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  data: STData[] = [];
  columns: STColumn[] = [
    { title: '编号', index: 'id', sort: true },
    {
      title: 'Other',
      children: [
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
          sort: true,
          children: [
            { title: 'first', index: 'name.first', sort: true },
            { title: 'last', index: 'name.last' },
          ],
        },
      ],
    },
  ];
  columns2: STColumn[] = [
    { title: '编号', index: 'id', sort: true },
    {
      title: 'test1',
      children: [
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
        },
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
        },
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
        },
      ],
    },
    {
      title: 'test2',
      children: [
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
        },
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
        },
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
        },
      ],
    },
  ];
  constructor(public msg: NzMessageService) { }
  submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
