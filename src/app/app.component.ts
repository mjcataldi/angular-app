import { Component } from "@angular/core";
import { FavoriteChangedEventargs } from "./favorite/favorite.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  };

  onFavoriteChanged(args: FavoriteChangedEventargs) {
    console.log(`Favorite Changed:`, args);
  }
}
