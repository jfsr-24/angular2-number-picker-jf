"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let NumberPickerjfComponent = class NumberPickerjfComponent {
    constructor() {
        this.onChange = new core_1.EventEmitter();
    }
    ngOnInit() {
        if (this.pattern == null) {
            let patternStr = '[' + this.min + '-' + this.max + ']*';
            this.pattern = new RegExp(patternStr);
        }
        if (this.inputDisabled == null) {
            this.inputDisabled = false;
        }
        this.numberPicker = new forms_1.FormControl({ value: this.min, disabled: this.inputDisabled }, forms_1.Validators.pattern(this.pattern));
        this.numberPicker.registerOnChange(() => {
            this.onChange.emit(this.numberPicker.value);
        });
        this.labelmod = this.asignarlabelmod(this.numberPicker.value);
    }
    increaseValue() {
        var currentValue = this.numberPicker.value;
        if (currentValue < this.max) {
            currentValue = currentValue + this.step;
            if (this.precision != null) {
                currentValue = this.round(currentValue, this.precision);
            }
            this.numberPicker.setValue(currentValue);
            this.labelmod = this.asignarlabelmod(currentValue);
        }
    }
    decreaseValue() {
        var currentValue = this.numberPicker.value;
        if (currentValue > this.min) {
            currentValue = currentValue - this.step;
            if (this.precision != null) {
                currentValue = this.round(currentValue, this.precision);
            }
            this.numberPicker.setValue(currentValue);
            this.labelmod = this.asignarlabelmod(currentValue);
        }
    }
    round(value, precision) {
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
    asignarlabelmod(val){
        let label = "";
        if(val==1){
            label = "Mega";
        }else if(val>1){
            label = "Megas";
        }
        return label;
    }
    getValue() {
        return this.numberPicker.value;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NumberPickerjfComponent.prototype, "min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NumberPickerjfComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NumberPickerjfComponent.prototype, "step", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NumberPickerjfComponent.prototype, "precision", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", RegExp)
], NumberPickerjfComponent.prototype, "pattern", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NumberPickerjfComponent.prototype, "inputDisabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NumberPickerjfComponent.prototype, "onChange", void 0);
NumberPickerjfComponent = __decorate([
    core_1.Component({
        selector: 'angular2-number-picker-jf',
        template: `
    <div class="input-group">	
        <div class="input-group-btn">
            <button class="btn btn-default" (click)="decreaseValue()">-</button>
        </div>
        <input [formControl]="numberPicker" class="form-control" type="number" min="{{min}}" max="{{max}}" pattern="{{pattern}}"/>	
        <div class="input-group-btn">
            <button class="btn btn-primary" (click)="increaseValue()">+</button>
        </div>
    </div>
  `,
        styles: [`
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    input[type=number] {
      text-align: center;
    }
  `]
    }),
    __metadata("design:paramtypes", [])
], NumberPickerjfComponent);
exports.NumberPickerjfComponent = NumberPickerjfComponent;
//# sourceMappingURL=number-picker.component.js.map