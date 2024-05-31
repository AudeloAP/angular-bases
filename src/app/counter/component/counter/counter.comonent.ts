import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounterToTen()">RESET</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {
    public  counter: number = 10

    public increaseBy(num: number): void {
        this.counter += num
    }

    public resetCounterToTen():void {
        this.counter = 10
    }
}