// angular
import {ControlGroup, Control} from '@angular/common';

// libs
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/take';

// app
import {FormComponent, CoreConfigService, LogService, ILang} from '../../core.framework/index';
import {ElectronEventService} from '../../electron.framework/index';
import {MultilingualService} from '../index';

@FormComponent({
  selector: 'lang-switcher',
  templateUrl: './app/frameworks/i18n.framework/components/lang-switcher.component.html'
})
export class LangSwitcherComponent {
  public langForm: ControlGroup;
  public supportedLanguages: Array<ILang> = MultilingualService.SUPPORTED_LANGUAGES;

  constructor(private log: LogService, private store: Store<any>, private multilang: MultilingualService) {
    store.take(1).subscribe((s: any) => {
      // s && s.18n - ensures testing works in all cases (since some tests dont use i18n state)
      this.langForm = new ControlGroup({
        lang: new Control(s && s.i18n ? s.i18n.lang : '')
      });
    });

    if (CoreConfigService.IS_DESKTOP()) {
      // allow electron menu to talk to component
      ElectronEventService.on('changeLang').subscribe((e: any) => {
        this.changeLang({ target: { value: e.detail.value } });
      });
    }    
  }
  changeLang(e: any) {
    let lang = this.supportedLanguages[0].code; // fallback to default 'en'
    
    if (CoreConfigService.IS_MOBILE_NATIVE()) {
      if (e) {
        lang = this.supportedLanguages[e.newIndex].code;
      }
    } else if (e && e.target) {
      lang = e.target.value;
    }
	if (document.getElementById('wijmo_lg') !== null)
		document.getElementById('wijmo_lg').remove();
	let head = document.getElementsByTagName('head').item(0);
	let script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('id', 'wijmo_lg');
	script.setAttribute('src', 'scripts/vendor/wijmo.culture.'+ lang + '.js');
	head.appendChild(script);
    this.log.debug(`Language change: ${lang}`);
    this.multilang.changeLang(lang);
	setTimeout(function(){
		wijmo.Control.invalidateAll();
	}, 50);
  }
}
