import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders a welcome message', () => {
    const wrapper = mount(TheWelcome)

    const message = wrapper.find('.h1')
    expect(message.text()).toBe('Welcome to the Eurojackpot lottery results')

    const button = wrapper.find('.btn-primary')
    expect(button.text()).toBe('View results')
  })
})
