import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {}

  public saludar() {
    alert("Hola Caracola");
  }

  title = "Mi primera app con Angular 7";
  nombre = "Jose Luis";
  apellido = "Ferrete";
}
