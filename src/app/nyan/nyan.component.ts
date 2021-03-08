import {Component, ElementRef, Input, OnInit, ViewChild , Injectable, InjectionToken, Inject} from '@angular/core';
import { TestService2Service } from '../test-service-2.service';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfigToken } from '../app.config';

@Component({
  selector: 'app-nyan',
  templateUrl: './nyan.component.html',
  styleUrls: ['./nyan.component.sass']
})
export class NyanComponent implements OnInit {

  constructor(private testService2Service: TestService2Service , @Inject(AppConfigToken) config: any) {
    console.log(config);
  }

  ngOnInit(): void {
    this.testService2Service.myFunction();
  }

}
