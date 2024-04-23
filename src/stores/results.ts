import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { computed, ref, watch } from 'vue'
import type { Results } from '../types/results'
import { provideApolloClient } from '@vue/apollo-composable'

const storeKey = 'results'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:8010/proxy/graphql'
})

const results = ref<Results | null>(null)

export const useResultsStore = defineStore(storeKey, () => {
  const query = provideApolloClient(apolloClient)(() =>
    useQuery(gql`
      query {
        draw(type: "eurojackpot", date: "", limit: 20) {
          backendError
          success
          draws {
            additionalNumbers
            date
            gameAmount
            jackpot
            numbers
          }
        }
      }
    `)
  )

  watch(query.error, (error) => {
    console.log('error', error)
  })

  watch(query.result, (result) => {
    if (result) {
      results.value = result
    }
  })

  const draw = computed(() => results.value)
  const loading = computed(() => query.loading)

  return {
    draw,
    loading
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useResultsStore, import.meta.hot))
}
