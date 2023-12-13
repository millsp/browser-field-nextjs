import { NextResponse } from 'next/server'
import { hello } from 'package'

export async function middleware() {
  // browser.js ends up in middleware-bundle.js
  const result = hello()

  return NextResponse.json("{}")
}
