import { Component } from "@angular/core";
import { FavoriteChangedEventargs } from "./favorite/favorite.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses = [1, 2, 3];
}
