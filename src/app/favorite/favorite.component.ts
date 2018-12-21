import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"],
  encapsulation: ViewEncapsulation.Emulated
  // Default is Emulated, and for this is good because some browsers are not
  // yet set up for this.
})
export class FavoriteComponent {
  // Use aliases in Input and Output to keep the contracts stable
  @Input("isFavorite") isSelected: boolean;
  @Output("change") click = new EventEmitter();

  //

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventargs {
  newValue: boolean;
}
