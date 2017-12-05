# Cozy

*A place to rest your weary head, traveller*

**Cozy** is a template for modern NodeJS backends and API servers featuring
modernizations such as ECMAScript 2017 for hacking,
[ava](https://github.com/avajs/ava) for testing, and
[strict linting](https://github.com/airbnb/javascript) for sanity.

You may use Cozy as a guide for project structure. Or you may use it as a
template for our own project. Or perhaps you're just passing through?

## Design

Cozy has an opinionated project structure which aims to lay the foundation for
a much more complicated project. There are three primary concerns Cozy has an
opinion about:

1. Routes
2. Controllers
3. Models

These concepts are no doubt familiar to seasoned web developers, however let's
talk for a moment about how Cozy conceives of these.

### Routes

Routes are [Express](http://expressjs.com) routes. Logical components of the
application's routing are self-contained. For example, assume an HTTP
interface that exposes an API. This notion is contained within
`src/routes/api`. More specifically if we have an endpoint called `health`
which returns data regarding the healthfulness of the application that would
live within `src/routes/api/health.js`.

The above file tree would look something like this:

```
src/routes/
├── api
│   ├── health.js
│   └── index.js
└── index.js
```

Importantly `health.js` instantiates an Express `Router`, binds a controller
to `"/health"` (more on controllers in a bit), and then exports the router.
Later on in `api/index.js` we import the health router. Within the index we
use instantiate yet another router, this time prefixing it with `"/api"`. The
purpose is to allow us to `use` all API routes with this router, giving us a
single object to export and use later--a single container for all the API
routes.

Finally all routes are rolled together in `src/routers/index.js`. Why go to all
this trouble for one route? Of course we could do this in a simpler manner
 However as the application grows, things will quickly become unweildy.
By drawing logical separations in the sand we sequester components of logic
into their own namespaces. The result is much easier to reason about and
extend, especially as our application becomes larger.

### Controllers

All routes are bound to controllers. Controllers are responsible for taking a
request and response stream and doing something with them. In the example of
the `/health` route

```
src/controllers/
├── api
│   ├── health.js
│   └── index.js
└── index.js
```

This file-tree structure should look familiar: it mirrors the routes layout.

### Models

For the time being we haven't included any routes, however they should model
the same structure as routes and controllers.
