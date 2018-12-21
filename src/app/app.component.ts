import { Component } from "@angular/core";
import { FavoriteChangedEventargs } from "./favorite/favorite.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
    { id: 4, name: "course4" }
  ];

  onAdd() {
    let newCount = this.courses.length + 1;
    this.courses.push({
      id: newCount,
      name: `course${newCount}`
    });
  }

  onChange(course) {
    let indexOfCourse = this.courses.indexOf(course);
    this.courses.splice(indexOfCourse, 1);
  }
}
