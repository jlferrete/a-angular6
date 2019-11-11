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

  cursos = [
    { id: 1, titulo: "Angular 7", horas: "20" },
    { id: 2, titulo: "JavaScript", horas: "16" },
    { id: 3, titulo: "DevOps", horas: "24" },
    { id: 4, titulo: "Java", horas: "8" }
  ];

  value: number = 0;

  public seleccion(curso) {
    console.log("Ha seleccionado el curso:", curso.titulo);
  }
}
