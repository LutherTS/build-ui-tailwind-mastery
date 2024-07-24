import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

// from Next.js
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

// from me
const ginto = localFont({
  src: "./fonts/ginto-semibold.woff",
  variable: "--font-ginto",
});
const whitney = localFont({
  src: [
    {
      path: "./fonts/whitney-light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/whitney-book.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/whitney-medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/whitney-semibold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-whitney",
});

export const metadata: Metadata = {
  title: "Discord Clone BuildUI",
  description: "From the course Tailwind Mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ginto.variable} ${whitney.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

/* Notes
So the deployment problems where: 
- npm install @flydotio/dockerfile --save-dev --legacy-peer-deps
before fly launch
- npx @flydotio/dockerfile --legacy-peer-deps
before fly deploy
To deal with Next.js 15 RC React 19 RC --force issues.
- ARG DATABASE_URL=file:./dev.db
in the Dockerfile
To access the DATABASE_URL environment variable during deployment
Safer methods to implement later here: 
https://fly.io/javascript-journal/demystify-docker-js/
https://fly.io/docs/apps/build-secrets/#mounting-secrets
- fly secrets set $ fly secrets set SECRET_PASSWORD=<value>
before fly deploy
To set the runtime secrets (in the case for the database)
- ENV HOSTNAME "0.0.0.0"
in the Dockerfile
To force the correct hostname being listened to be fly.io
- RUN npx prisma db push
To get the database to work in production like it does in development
- commenting out // "npx prisma migrate deploy"
in docker-entrypoint.js
To avoid the Prisma baselining issue.
https://www.prisma.io/docs/orm/prisma-migrate/workflows/baselining

The next challenges I'll have to overcome are:
- Making "RUN npx prisma db seed" work
- Turning ARG DATABASE_URL into a build secret

But the good thing is, now I can confidently work on my
Next.js/Prisma/SQLite/Fly.io
combo moving forward without fear of making an entire app for nothing.
*/
