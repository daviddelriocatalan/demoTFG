import { Injectable } from '@angular/core';
import { createClient, Entry, ContentType } from 'contentful';

const CONFIG = {
  space: 'm6taxfl002qd',
  accessToken: 'xxn9mlGNkMwQKhV9AVbq-WWE9QfUwoINacVl8YVjEeg',

  contentTypeIds: {
    demo: 'demot',
    blogPost: 'blogPost'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
  constructor() {}

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries
      /*  Object.assign(
          {
            content_type: CONFIG.contentTypeIds.demo
          },
          query
        ) */
      ()
      .then(res => res.items);
  }

  getContentTypes(query?: object): Promise<ContentType[]> {
    return this.cdaClient.getContentTypes(query).then(res => res.items);
  }
}
