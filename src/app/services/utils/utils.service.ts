import { Injectable } from '@angular/core';
import { Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  getDateTree(postsList: Entry<any>[]): any[] {
    let dt: any[] = [];
    const meses: string[] = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];

    /*
    [
      {
        mesanyo: "Septiembre 2019",
        activa: 'false',
        posts: [
          {
            id: "6GPBjhiR8jHSLlN3NGircY",
            titulo: "MDMA para bebés"
          }
        ]
      }
    ]
    */
    for (const post of postsList) {
      const d = new Date(post.sys.createdAt);
      if (dt.length === 0) {
        dt.push({
          mesanyo: `${meses[d.getUTCMonth()]} ${d.getUTCFullYear()}`,
          activa: 'false',
          posts: [
            {
              id: post.sys.id,
              titulo: post.fields.title
            }
          ]
        });
      } else {
        const existMonth: Boolean =
          dt.filter((element, index, dt) => {
            return (
              element.mesanyo ===
              `${meses[d.getUTCMonth()]} ${d.getUTCFullYear()}`
            );
          }).length > 0;

        if (existMonth) {
          dt = dt.map(dtElement => {
            if (
              dtElement.mesanyo ===
              `${meses[d.getUTCMonth()]} ${d.getUTCFullYear()}`
            ) {
              dtElement.posts = [
                ...dtElement.posts,
                {
                  id: post.sys.id,
                  titulo: post.fields.title
                }
              ];
            }
            return dtElement;
          });
        } else {
          dt.push({
            mesanyo: `${meses[d.getUTCMonth()]} ${d.getUTCFullYear()}`,
            activa: 'false',
            posts: [
              {
                id: post.sys.id,
                titulo: post.fields.title
              }
            ]
          });
        }
      }
    }

    dt = dt.map((node, index) => {
      if (index === 0) {
        return { ...node, activa: 'true' };
      }
      return node;
    });

    return dt;
  }
}
