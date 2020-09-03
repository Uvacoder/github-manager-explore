import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

export function setupApollo(url: string) {
  const httpLink = createHttpLink({ uri: url, fetch: fetch })

  const authLink = setContext((_, { headers }) => {
    const token = window.$cookies.get('token')
    console.log(token)
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null
      }
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
  })

  return apolloClient
}
