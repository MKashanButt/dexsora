import { NextRequest, NextResponse } from 'next/server'

type Middleware = (req: NextRequest) => NextResponse | Promise<NextResponse>

export function composeMiddleware(...middlewares: Middleware[]) {
  return async function(request: NextRequest) {
    for (const mw of middlewares) {
      const response = await mw(request)
      if (response && response.status !== 200) {
        return response
      }
    }
    return NextResponse.next()
  }
}
