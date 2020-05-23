import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { ActivatedRoute, Router } from "@angular/router";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ContentfulService } from "../services/contentful/contentful.service";
import { Entry } from "contentful";
import { UtilsService } from "../services/utils/utils.service";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.css"],
  animations: [
    trigger("postsMes", [
      state(
        "true",
        style({
          backgroundColor: "inherit"
        })
      ),
      state(
        "false",
        style({
          backgroundColor: "inherit"
        })
      ),
      transition("false => true", animate("1000ms ease-in")),
      transition("true => false", animate("1000ms ease-out"))
    ])
  ]
})
export class BlogPostComponent implements OnInit {
  blogPost: Entry<any>[] = [];
  dateTree: any[] = [];
  postId = "";
  bodyString = "";
  createdDate;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private router: Router,
    private utilsService: UtilsService
  ) {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get("id");

      this.contentfulService
        .getProducts()
        .then(bp => {
          this.dateTree = utilsService.getDateTree(bp);
          this.blogPost = bp.filter((v, index, bp) => {
            return v.sys.id === this.postId;
          });

          if (this.blogPost.length === 0) {
            this.router.navigate(["/blog"]);
          }
          console.log(bp);

          let options = {
            renderNode: {
              'embedded-asset-block': (node) =>
                `<img class="img-contentful" style="width: 200px; height: auto;" src="${node.data.target.fields.file.url}"/>`
            }
          }

          this.bodyString = documentToHtmlString(this.blogPost[0].fields.body, options);
          this.createdDate = new Date(this.blogPost[0].sys.createdAt);
        })
        .catch(err => {
          console.error(err);
        });
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
