// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "IKSU Consultant and Construction Company",
  description:
    "Your Ideas & Dreams Are Transformed By Us Into Long-Lasting, Engineered Buildings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
