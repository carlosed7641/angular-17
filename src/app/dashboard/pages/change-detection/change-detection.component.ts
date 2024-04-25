import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {


  currentFramework = computed(() => `Change Detection - ${this.frameworkAsSignal().name}`);

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseData: 2016
  });

  frameworkAsProperty = {
    name: 'Angular',
    releaseData: 2016
  }

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }));
    }, 3000)
  }
}
