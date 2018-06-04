import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';
import { MatDialogModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppConfig,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  exports: [CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppConfig,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  providers: [AppConfig]
})

export class SharedModule{}
