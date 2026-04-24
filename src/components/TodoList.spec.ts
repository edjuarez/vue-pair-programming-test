import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import TodoList from './TodoList.vue';

describe('TodoList.vue', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('restore default items and clean filter when click on reset', async () => {
    const wrapper = mount(TodoList);
    
    const filterInput = wrapper.find('input');
    await filterInput.setValue('Text that does not exist');
    
    expect(wrapper.text()).toContain('No results');

    const resetButton = wrapper.find('.reset');
    await resetButton.trigger('click');

    expect((filterInput.element as HTMLInputElement).value).toBe('');
    expect(wrapper.text()).toContain('Apple');
    expect(wrapper.text()).not.toContain('No results');
  });
});
