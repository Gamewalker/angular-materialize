import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var M: any;

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ($ => {

      // Or with jQuery
      $(document).ready(() => {
        $('.collapsible').collapsible();
      });
    })(jQuery);

  }

}
