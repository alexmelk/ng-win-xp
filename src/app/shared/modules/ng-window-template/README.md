# Шаблон для модальных окон

### Пример использования

```html
<dx-button (onClick)="popup.open()" text="Открыть"></dx-button>
<app-window-template #popup width="700px" height="350px" title="Modal">
  <ng-container appWindowTemplateTitle>
    <div>| Hello from title |</div>
  </ng-container>
  <ng-container appWindowTemplateBody>
    <div>| Hello from body |</div>
  </ng-container>
  <ng-container appWindowTemplateFooter>
    <div class="popup_toolbar">
      <dx-button (onClick)="popup.close()" text="Закрыть"></dx-button>
    </div>
  </ng-container>
</app-window-template>
```
TODO:
- выделить в npm пакет
- включить в пакет динамическую логику создания компонентов
