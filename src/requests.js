import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
} from 'apollo-boost';
import gql from 'graphql-tag';
import { isLoggedIn } from './auth';

const endpointURL = 'https://needy-cute-malamute.gigalixirapp.com/graphql';

const authLink = new ApolloLink((operation, forward) => {
	if (isLoggedIn()) {
		operation.setContext({
			headers: {},
		});
	}
	return forward(operation);
});

const client = new ApolloClient({
	link: ApolloLink.from([authLink, new HttpLink({ uri: endpointURL })]),
	cache: new InMemoryCache(),
});
