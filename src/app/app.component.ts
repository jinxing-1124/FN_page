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
import { HttpService } from './second_api';
import { HttpClient } from '@angular/common/http';

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
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  // dataSource = ELEMENT_DATA;
  columnsToDisplay = ['amount_sum', 'item', 'division'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: GetInitResponseModel | null;
  logout(): void {}
  // dataDetail = ELEMENT_DATA;
  expansionPanelData = tmpdata;
  columnsDetail = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ];
  dataDetailDisplay: any;

  // TableDetailData(element: any) {
  //   this.dataDetailDisplay = this.dataDetail;
  //   this.dataDetailDisplay = this.dataDetailDisplay.filter(
  //     (item: { 科目: any }) => item.科目 === element.科目
  //   );
  // }
  Test(data: any): void {
    console.log(typeof data, data);
  }
  res_data: GetInitResponseModel = {
    subjects: [],
  }
  getRepos():void {
    this.httpService.getInitResponse().subscribe((response) => {
      this.res_data = response.subjects;
      // console.log(this.res_data)

    });
  }

  TestData(): void {
    
  }

  ngOnInit(): void {
    this.httpService.getInitResponse().subscribe((response) => {
      this.res_data = response.subjects;
      for (const subject of this.res_data.subjects) {
        let data = {
          subject_name: subject.subject_name,
          project_name: '',
          tmp: [
            {
              amount: [[0]],
              amount_sum: 0,
              item: '',
              division: '',
            },
          ],
        };
        let tmp2: any[] = [];
        for (const summaryItem of subject.summary) {
          const sum = summaryItem.amount.reduce(
            (total, currentAmount) => total + currentAmount,
            0
          );
          data.project_name = summaryItem.project_name;
          const tmplist = {
            amount: [summaryItem.amount],
            amount_sum: sum,
            item: summaryItem.item,
            division: summaryItem.division,
          };
          tmp2.push(tmplist);
        }
        data.tmp = tmp2;
        tmpdata.push(data);
      }
    });
    // for (const subject of this.res_data.subjects) {
    //   let data = {
    //     subject_name: subject.subject_name,
    //     project_name: '',
    //     tmp: [
    //       {
    //         amount: [[0]],
    //         amount_sum: 0,
    //         item: '',
    //         division: '',
    //       },
    //     ],
    //   };
    //   let tmp2: any[] = [];
    //   for (const summaryItem of subject.summary) {
    //     const sum = summaryItem.amount.reduce(
    //       (total, currentAmount) => total + currentAmount,
    //       0
    //     );
    //     data.project_name = summaryItem.project_name;
    //     const tmplist = {
    //       amount: [summaryItem.amount],
    //       amount_sum: sum,
    //       item: summaryItem.item,
    //       division: summaryItem.division,
    //     };
    //     tmp2.push(tmplist);
    //   }
    //   data.tmp = tmp2;
    //   tmpdata.push(data);
    // }
  }
}

export interface GetInitDataResponseModel {
  data:GetInitResponseModel
}


export interface PeriodicElement {
  subject_id: number;
  project_id: number;
  金額: number;
  說明: string;
  科別: string;
}

let testnum = 0;

export interface MonthAmmountData {
  ammount: number[];
}
const ELEMENT_DATA: GetInitResponseModel = {
  subjects: [
    {
      subject_name: '訓練費',
      summary: [
        {
          project_name: '業務相關訓練課程',
          item: 'EA 教育訓練(TOGAF台灣分會)_5人_6,11月',
          division: 'EA',
          population: 5,
          amount: [0, 0, 0, 0, 0, 50000, 0, 0, 0, 0, 0, 50000],
        },
        {
          project_name: '業務相關訓練課程',
          item: '雲育鏈課程(雲端架構師考證班)_10人_6月',
          division: 'EA',
          population: 10,
          amount: [0, 0, 0, 0, 0, 400000, 0, 0, 0, 0, 0, 0],
        },
      ],
    },
    {
      subject_name: '資訊',
      summary: [
        {
          project_name:
            "專業分析報告及產業資料庫 (Gartner, CBInsight, similar web, LeetCode, O'Reilly)",
          item: 'Gartner for Technical Professionals 第一年費用(共二年)_1月',
          division: 'EA',
          population: 0,
          amount: [3000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          project_name:
            "專業分析報告及產業資料庫 (Gartner, CBInsight, similar web, LeetCode, O'Reilly)",
          item: 'xxxxx',
          division: 'EA',
          population: 0,
          amount: [0, 0, 0, 0, 0, 75000, 0, 0, 0, 0, 0, 75000],
        },
      ],
    },
  ],
};
export interface GetInitDataResponseModel {
  data: GetInitResponseModel;
}
export interface GetInitResponseModel {
  subjects: GetInitSubjectModel[];
}

export interface GetInitSubjectModel {
  subject_name: string;
  summary: GetInitSummaryModel[];
}
export interface GetInitSummaryModel {
  project_name: string;
  item: string;
  division: string;
  population: number;
  amount: number[];
}

const expansionPanelData: expansionPanelModel[] = [];

export interface expansionPanelModel {
  subject_name: string;
  project_name: string;
  amount: number[][];
  table_up_data: tableUpModel[];
}

export interface tableUpModel {
  ammount_sum: number;
  item: string;
  division: string;
}

const tmpdata: tmpUpModel[] = [];

export interface tmpUpModel {
  subject_name: string;
  project_name?: string;
  tmp: tmpMidModel[];
}

export interface tmpMidModel {
  amount: number[][];
  amount_sum: number;
  item: string;
  division: string;
}
