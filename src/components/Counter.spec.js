import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import Counter from './Counter.vue';

describe('Counter.vue', () => {
  beforeEach(() => {
    localStorage.clear();
  });
        
  it('debe incrementar el contador al hacer clic en el botón de incremento', async () => {
    const wrapper = mount(Counter);
    
    const button = wrapper.find('.increment');
    await button.trigger('click');

    expect(wrapper.text()).toContain('1');
  });

  it('debe decrementar el contador al hacer clic en el botón de decremento', async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find('.decrement');
    
    await button.trigger('click');
    expect(wrapper.text()).toContain('-1');
  });
});