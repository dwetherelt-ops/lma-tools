import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Like Minds Community — Neurodivergent Adult Community",
  description:
    "The world's most credible, compassionate, and empowering community for neurodivergent minds. Science-backed resources, genetics education, and peer support.",
  openGraph: {
    title: "Like Minds Community",
    description:
      "Science-backed community for neurodivergent adults. Genetics education, peer support, and burnout prevention.",
    url: "https://likemindsalliance.org",
    siteName: "Like Minds Community",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
         * Circle.so community widget (beta/testing)
         * Floating launcher icon in the bottom-right corner.
         * Brand color #3E7875 matches site teal-600.
         * To disable: comment out or remove this <Script> block.
         */}
        <Script
          id="circle-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w,d,s,o,f,js,fjs) {
                w['circleWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
              }(window, document, 'script', 'mw', 'https://like-minds-community-8530fe.circle.so/external/widget.js'));
              mw('init', {
                community_public_uid: 'da6004a2',
                brand_color_dark: '#3E7875',
                brand_color_light: '#3E7875',
                default_appearance: 'light'
              });

              /*
               * Global click interceptor (capture phase).
               * Any <a> linking to circle.so or any element with
               * data-community="open" will open the widget modal
               * instead of navigating away from the site.
               */
              document.addEventListener('click', function(e) {
                var el = e.target;
                while (el && el !== document) {
                  if (el.tagName === 'A' && el.href && el.href.indexOf('circle.so') !== -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    mw('open');
                    return;
                  }
                  if (el.dataset && el.dataset.community === 'open') {
                    e.preventDefault();
                    e.stopPropagation();
                    mw('open');
                    return;
                  }
                  el = el.parentNode;
                }
              }, true);
            `,
          }}
        />

        {/* Nudge widget up on mobile so it clears sticky CTA buttons */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 640px) {
                #circle-widget-iframe,
                [data-circle-widget] {
                  bottom: 80px !important;
                }
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
