import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { provideRouter } from '@angular/router'
import { provideNzIcons } from 'ng-zorro-antd/icon'
import { IconDefinition } from '@ant-design/icons-angular'
import { routes } from './app.routes'
import {
  CheckOutline,
  CopyOutline,
  ShareAltOutline,
  EllipsisOutline,
  LoadingOutline,
  UploadOutline,
  MinusOutline,
  PlusOutline,
  StopOutline,
} from '@ant-design/icons-angular/icons'
import { provideAnimations } from '@angular/platform-browser/animations'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { zh_CN } from 'ng-zorro-antd/i18n'

registerLocaleData(zh)

const icons: const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "示例分类1",
    sites: [
      {
        /** 网站标题 */
        title: "主标题",
        /** 网站 url */
        url: "http://www.your-web-page.com/",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "",
        /** 指定网站 icon 背景色 */
        color: "#0171CD",
      },
    ],
  },
  // ... ...
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideNzIcons(icons),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    { provide: NZ_I18N, useValue: zh_CN },
  ],
}
