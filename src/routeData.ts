import { defineRouteMiddleware } from '@astrojs/starlight/route-data'
import { GUIDES_DIR } from './data/extensions.mjs'
import { markAllCurrent } from './lib/markAllCurrent.mjs'

export const onRequest = defineRouteMiddleware((context) => {
    const route = context.locals.starlightRoute
    markAllCurrent(route.sidebar, context.url.pathname)

    // Previous/Next follow the first sidebar copy of a page, so on a guide listed
    // under an extension too they would point into the Guides group, not back to
    // the extension the reader came from. Guides get neither.
    if (context.url.pathname.startsWith(`/${GUIDES_DIR}/`)) {
        route.pagination = { next: undefined, prev: undefined }
    }
})
