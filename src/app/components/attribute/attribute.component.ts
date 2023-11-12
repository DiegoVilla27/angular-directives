import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-attribute",
  templateUrl: "./attribute.component.html",
  styleUrls: ["./attribute.component.scss"]
})
export class AttributeComponent implements OnInit {
  classColor: boolean = true;
  styleColor: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  changeClass(): void {
    this.classColor = !this.classColor;
  }

  changeStyle(): void {
    this.styleColor = !this.styleColor;
  }
}
