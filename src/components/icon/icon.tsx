import { Component, Prop } from '@stencil/core';
import icon from './generate-icon';

@Component({
  tag: 'forecast-icon',
  styleUrl: 'icon.scss'
})
export class ForecastIcon {

  @Prop() name: string;
  @Prop() size: string = '100';

  render() {
    const clearDay = icon(this.name, this.size, this.size);

    return <div class="icon-inner" innerHTML={clearDay}></div>;;
  }
}
