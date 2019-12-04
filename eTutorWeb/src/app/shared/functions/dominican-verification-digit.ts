/* tslint:disable */

import {AbstractControl} from '@angular/forms';

export function DominicanVerificationDigitValidator(control: AbstractControl){
  let cedula = control.value;

  if (cedula == null || cedula == undefined || cedula == '') {
    return null;
  }
  cedula = cedula.replace(/-/g, '');
  let c = cedula.split('');
  let v = [1,2,1,2,1,2,1,2,1,2];
  let result: any = 0;
  let ar ;
  let up;
  let oc;
  let ab;
  for (let i=0;i <10;i++){
    up =c[i] * v[i];
    ab = up;
    if ( ab >= 10 ) {
      oc = ab.toString()
        .split('')
        .map(x => parseInt(x) )
        .reduce( (x, y) => x + y);
    }else {
      oc = ab;
    }
    result = parseFloat(result) + parseFloat(oc);
  }
  let dp = result;
  let ac: any = dp.toString().split('')[0] + '0';
  ac = parseInt(ac);
  let uj = (ac / 10) * 10;
  if (uj < dp ) {
    dp = (uj + 10) - dp;
  } else {
    dp = uj - dp
  }
  if (c[10] == dp) {
    return {InvalidId: true};
  } else {
    return null;
  }
}
