import { Directive } from '@angular/core';

@Directive({
  selector: '[appAuthGuard]',
  standalone: true
})
export class AuthGuardDirective {

  constructor() { }

}
