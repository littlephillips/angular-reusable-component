import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-reusable-component',
  templateUrl: './my-reusable-component.component.html',
  styleUrls: ['./my-reusable-component.component.scss']
})
export class MyReusableComponentComponent { 

  @Input() title: string | undefined;
  @Input() heading: string | undefined ;
  @Input() subheading: string | undefined;
  @Input() imageUrl: string| undefined;

}
