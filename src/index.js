import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from '@apollo/client';
import MusicList from "./components/MusicList";
import client from "./apolloClient";

function App() {

    client.query({
        query: gql(`
              query {
                  musiques {
                    name
                  }
               }
            `)
    })
        .then(result => console.log(result));
    return (
        <ApolloProvider client={client}>
            <div>
                <h2>My first Apollo app 🚀</h2>
                <MusicList></MusicList>
            </div>
        </ApolloProvider>
    );
}

render(<App/>, document.getElementById('root'));
