import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';


type Grade = 'A' | 'B' | 'C' | 'D' | 'F'

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  showContent = signal(false)
  grade = signal<Grade>('B')

  frameworks = signal<string[]>(['Angular', 'React', 'Vue'])
  frameworks2 = signal<string[]>([])


  toggleContent() {
    this.showContent.update(value => !value)
  }

}
