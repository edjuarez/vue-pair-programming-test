import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import Counter from './Counter.vue';

describe('Counter.vue', () => {
  beforeEach(() => {
    localStorage.clear();
  });
        
  it('should increment counter when click on increment button', async () => {
    const wrapper = mount(Counter);
    
    const button = wrapper.find('.increment');
    await button.trigger('click');

    expect(wrapper.text()).toContain('1');
  });

  it('should decrement counter when click on decrement button', async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find('.decrement');
    
    await button.trigger('click');
    expect(wrapper.text()).toContain('-1');
  });
});
