import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData!: FormGroup;
  loading: boolean = false;
  hide: boolean = true;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin(): void {
    if (this.loginData.valid) {
      this.loading = true;
      const { email, password } = this.loginData.value;

      this.auth.login(email, password).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('idUser', res.user.id);
          localStorage.setItem('role', res.user.role);
          this.redirectUser(res.user.role);
          this.listUsers(); // Chama o método para listar usuários após login
        },
        error: (error) => {
          this.showSnackBar('Invalid credentials', 'Error');
          this.loading = false;
        },
      });
    } else {
      this.showSnackBar('Please check your form', 'Form Invalid');
    }
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  redirectUser(role: string): void {
    switch (role) {
      case 'admin':
        this.router.navigate(['formulario']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  goToCadastro(): void {
    this.router.navigate(['/cadastro']);
  }

  listUsers(): void {
    this.auth.getUsers().subscribe({
      next: (res) => {
        console.log('Users:', res);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }
}
