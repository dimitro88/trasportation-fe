import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  activeButton: string;

  routes = [
    {
      route: 'auth/customer',
      type: 'customer'
    },
    {
      route: 'auth/broker',
      type: 'broker'
    },
    {
      route: 'auth/driver',
      type: 'driver'
    }
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findActiveRoute(this.router.url);
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.findActiveRoute(e.urlAfterRedirects);
      }
    });
  }

  private findActiveRoute(route: string) {
    const activeRoute = this.routes.find(el => route.includes(el.route));
    if (!activeRoute) {
      this.activeButton = this.routes[0].type;
    } else {
      this.activeButton = activeRoute.type;
    }
  }

  redirectTo(url: string): void {
    this.activeButton = url;
    this.router.navigate([url]);
  }
}
