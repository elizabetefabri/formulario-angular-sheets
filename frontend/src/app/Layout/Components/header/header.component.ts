import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isModalOpen: boolean = false;
  itemCount: number = 0;
  isMenuOpen: boolean = false;
  userName: string | null = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.setUserName();
  }

  setUserName(): void {
    this.userName = localStorage.getItem('userName');
    if (this.userName) {
      this.router.navigate([`/formulario/${encodeURIComponent(this.userName)}`]);
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  deslogar() {
    this.auth.logout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
