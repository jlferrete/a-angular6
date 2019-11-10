import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Input()
  entrada: string;

  constructor() {}

  ngOnInit() {
    console.log(this.entrada);
  }
}
