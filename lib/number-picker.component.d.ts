import { EventEmitter, OnInit } from '@angular/core';
export declare class NumberPickerjfComponent implements OnInit {
    min: number;
    max: number;
    step: number;
    labelmod: string;
    precision: number;
    pattern: RegExp;
    inputDisabled: boolean;
    onChange: EventEmitter<number>;
    private numberPicker;
    constructor();
    ngOnInit(): void;
    private increaseValue();
    private decreaseValue();
    private round(value, precision);
    getValue(): number;
}
