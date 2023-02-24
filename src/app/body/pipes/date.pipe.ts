import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'DateMonth',
})
export class dateMontPipe implements PipeTransform {
    transform(value: any) {
       var datePipe = new DatePipe("es-CL");
        value = datePipe.transform(value, 'MMMM');
        return value;
    }
}

@Pipe({
    name: 'DateYear',
})
export class dateYearPipe implements PipeTransform {
    transform(value: any) {
       var datePipe = new DatePipe("es-CL");
        value = datePipe.transform(value, 'YYYY');
        return value;
    }
}