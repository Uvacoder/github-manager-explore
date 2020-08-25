import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

export function setupApollo(url: string, headers: {Authorization: string}) {
  const httpLink = createHttpLink({ uri: url, headers: headers, fetch: fetch })
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return apolloClient
}
