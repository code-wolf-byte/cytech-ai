import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, country, message, agree } = await request.json()

  // Process the form data (e.g., send an email, save to a database, etc.)
  // For now, we will just log the data
  console.log({ firstName, lastName, email, subject, country, message, agree })

  // Send a success response
  return NextResponse.json({ message: 'Form submitted successfully' })
}
