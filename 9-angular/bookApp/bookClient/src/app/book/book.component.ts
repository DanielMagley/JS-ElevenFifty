import { OnInit, Component, Input } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponenet implements OnInit {
  ngOnInit() {}

  public _book = "";

  @Input()
  set book(book: string) {
    this._book = book;
  }

  get book(): string {
    return this._book;
  }
}
