import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Counter-App";
  count: number = 0;
  isCountNegative: boolean = false;
  onIncrement() {
    this.count = this.count + 1;
    this.isCountNegative = this.isNegative();
    console.log(this.isCountNegative);
  }

  onDecrement() {
    this.count = this.count - 1;
    this.isCountNegative = this.isNegative();
    console.log(this.isCountNegative);
  }
  onReset() {
    this.count = 0;
    this.isCountNegative = this.isNegative();
    console.log(this.isCountNegative);
  }

  isNegative() {
    if (this.count >= 0) return false;
    else return true;
  }
}
