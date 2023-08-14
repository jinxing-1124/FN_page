import { Component, OnInit } from '@angular/core';
import {
  MatDrawerToggleResult,
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AppComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    '科目',
    '整年預計使用',
    '目前應發生',
    '目前已發生',
    '年度使用率',
    '累積使用率',
    '狀態',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;
  logout(): void {}
  dataSource1 = ELEMENT_DATA1;
  columnsDetail = [
    '項目',
    '整年預計使用',
    '目前應發生',
    '目前已發生',
    '年度使用率',
    '累積使用率',
    '狀態',
  ];
}

export interface PeriodicElement {
  科目: string;
  整年預計使用: number;
  目前應發生: number;
  目前已發生: number;
  年度使用率: string;
  累積使用率: string;
  狀態: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    科目: '資訊',
    整年預計使用: 31100000,
    目前應發生: 15350000,
    目前已發生: 2247000,
    年度使用率: '7.23%',
    累積使用率: '14.64%',
    狀態: '注意',
    description: 'test',
  },
  {
    科目: '其他費用',
    整年預計使用: 67080000,
    目前應發生: 43276664,
    目前已發生: 17055860,
    年度使用率: '25.43%',
    累積使用率: '39.41%',
    狀態: '正常',
    description: `test`,
  },
];
export interface PeriodicElement1 extends PeriodicElement{
  項目: string;
}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {
    科目: '資訊',
    項目: '專業分析報告及產業資料庫',
    整年預計使用: 31100000,
    目前應發生: 15350000,
    目前已發生: 2247000,
    年度使用率: '7.23%',
    累積使用率: '14.64%',
    狀態: '注意',
    description: 'test',
  },
  {
    科目: '其他費用',
    項目: '委外開發人力',
    整年預計使用: 67080000,
    目前應發生: 43276664,
    目前已發生: 17055860,
    年度使用率: '25.43%',
    累積使用率: '39.41%',
    狀態: '正常',
    description: `test`,
  },
];