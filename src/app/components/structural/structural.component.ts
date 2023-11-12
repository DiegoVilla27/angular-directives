import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structural",
  templateUrl: "./structural.component.html",
  styleUrls: ["./structural.component.scss"]
})
export class StructuralComponent implements OnInit {
  flag: boolean = true;
  list: string[] = ["Item", "Item", "Item"];
  color: string = "green";

  constructor() {}

  ngOnInit(): void {}

  changeColor(): void {
    const color = {
      "green": "green",
      "blue": "blue",
      "": ""
    };
    const keys = Object.keys(color);
    const index = Math.floor(Math.random() * keys.length);
    this.color = keys[index];
  }
}
