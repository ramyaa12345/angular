import { Component, OnInit } from '@angular/core';
import { Query } from '../hrquery/hrquery.component';

import { QueryService } from '../service/query.service';
import { ResponseService } from '../service/response.service';

export class Response{
  constructor(
    public question: string,
    public answer: string,
    public emailId: string,
    public qid: number){}
}

@Component({
  selector: 'app-hrtokens',
  templateUrl: './hrtokens.component.html',
  styleUrls: ['./hrtokens.component.css']
})
export class HrtokensComponent implements OnInit {
  q: Query[];
  r: Response;

  constructor(private queryservice: QueryService,
    private responseservice: ResponseService) { }

  ngOnInit(): void {
    this.queryservice.getQueries().subscribe(response => this.q = response);
  }

  respond(){
    // this.responseservice.sendResponse(r).subscribe();
    
  }

}
