import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      postTitle: 'Post 1',
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      postLoveIt: 0,
      postCreatedAt: new Date(),
    },
    {
      postTitle: 'Post 2',
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      postLoveIt: 0,
      postCreatedAt: new Date(),
    },
    {
      postTitle: 'Post 3',
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      postLoveIt: 0,
      postCreatedAt: new Date(),
    },
    {
      postTitle: 'Post 4',
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      postLoveIt: 0,
      postCreatedAt: new Date(),
    },
    {
      postTitle: 'Post 5',
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      postLoveIt: 0,
      postCreatedAt: new Date(),
    },
  ];

}
