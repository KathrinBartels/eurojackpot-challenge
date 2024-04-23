import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TheResults from '../TheResults.vue'

describe('TheResults', () => {
  it('renders the component with data', async () => {
    const wrapper = mount(TheResults, {
      data() {
        return {
          draw: {
            draw: {
              backendError: null,
              success: true,
              draws: [
                {
                  additionalNumbers: [1, 2],
                  date: '2021-01-01',
                  gameAmount: 1,
                  jackpot: 1,
                  numbers: [1, 2, 3, 4, 5, 6, 7]
                }
              ]
            }
          }
        }
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
