import { mount } from 'vue-test-utils';
import Button from '@/components/button';

describe('button.vue', () => {
  it('should render correct contents', () => {
    const btnText = 'Hello button';
    const component = mount(Button, {
      slots: {
        default: btnText,
      },
    });
    expect(component.vm.$el.textContent)
      .toEqual(btnText);
  });
});
