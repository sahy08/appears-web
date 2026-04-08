import { Component, HostBinding } from '@angular/core';
import { translations, Lang } from './translations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLight = true;
  lang: Lang = 'es';

  @HostBinding('class.light')
  get lightClass() { return this.isLight; }

  get t() { return translations[this.lang]; }

  toggleTheme() { this.isLight = !this.isLight; }
  toggleLang()  { this.lang = this.lang === 'es' ? 'en' : 'es'; }
  printCV()     { globalThis.print(); }
}
