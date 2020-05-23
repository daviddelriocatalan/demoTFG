import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ContentfulService } from "../services/contentful/contentful.service";
import { UtilsService } from "../services/utils/utils.service";
import { Entry } from "contentful";
import { NONE_TYPE } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.css"],
  animations: [
    trigger("postsMes", [
      state(
        "true",
        style({
          backgroundColor: "inherit"
          // display: 'block',
        })
      ),
      state(
        "false",
        style({
          backgroundColor: "inherit"
          // display: 'none',
        })
      ),
      transition("false => true", animate("1000ms ease-in")),
      transition("true => false", animate("1000ms ease-out"))
    ])
  ]
})
export class BlogListComponent implements OnInit {
  postsList: any[] = [];
  dateTree: any[] = [];
  bodyString = "";

  constructor(
    private contentfulService: ContentfulService,
    private utilsService: UtilsService
  ) {
    this.contentfulService
      .getProducts()
      .then(result => {
        this.postsList = result;
        this.postsList = this.postsList.map(post => ({
          bodyString: documentToHtmlString(post.fields.body),
          ...post
        }));
        console.log(result);
        this.dateTree = utilsService.getDateTree(this.postsList);
      })
      .catch(err => {
        console.error(err);
      });
  }

  ngOnInit() {}

  public onToggleMonth(month: any): void {
    this.dateTree = this.dateTree.map(entry => {
      if (month.mesanyo === entry.mesanyo) {
        const activaValue = entry.activa === "false" ? "true" : "false";
        return { ...entry, activa: activaValue };
      } else {
        return { ...entry };
      }
    });
  }
}
