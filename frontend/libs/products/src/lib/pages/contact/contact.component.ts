/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "products-contact",
  templateUrl: "./contact.component.html",
  styles: [],
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onClick() {
    alert("Submitted");
    this.router.navigate(["/"]);
  }
}
