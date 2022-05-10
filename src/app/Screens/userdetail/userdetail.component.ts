import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
})
export class UserdetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}
  image: any;
  id: any;
  firstName: any;
  lastName: any;
  email: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.getUserDetail();
  }

  getUserDetail() {
    this.auth.getUserId(this.id).subscribe((res: any) => {
      const userdata = res.data;
      this.firstName = userdata.first_name;
      this.lastName = userdata.last_name;
      this.image = userdata.avatar;
      this.email = userdata.email;
    });
  }
}
