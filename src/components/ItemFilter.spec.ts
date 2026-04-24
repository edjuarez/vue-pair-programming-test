import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ItemFilter from './ItemFilter.vue';

describe('ItemFilter.vue', () => {
  it('emit event update:modelValue when tipping on input', async () => {
    const wrapper = mount(ItemFilter, {
      props: { modelValue: '' }
    });

    const input = wrapper.find('input');
    await input.setValue('Pizza');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['Pizza']);
  });
});