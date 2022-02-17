# Structure

src/
├── components
├── config
├── hooks
├── init
├── lib
├── mocks
├── pages
├── providers
├── reducers
├── tests
└── types

* components: It manages in accordance with atomic design. Due to the small size of the application, the template dir has been removed.
* config: It manages environment variables and other settings.
* hooks: It manages the state created by useState.
* init: It manages the initial values of the data to be retrieved by the api.
* lib: It manages the api of axios and others.
* mocks: It manages the mock server of msw.
* pages: The largest component. Represents the entire page.
* providers: It manages the providers created by useContext.
* reducers: It manages the reducer created by useReducer.
* tests: It manages the tests.
* types: It manages the commonly used types.
