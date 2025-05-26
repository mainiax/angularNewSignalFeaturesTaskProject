// // standalone
// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// root
// ngModule
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
platformBrowser().bootstrapModule(AppModule);
