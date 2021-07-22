import Head from "next/head";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Link href="/">
        <a className="homeLink">
          Jess's Poetry
        </a>
      </Link>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            flex-direction: column;
            min-height: 100%;
          }
          .homeLink {
            margin-left: 25px;
            font-size: 2rem;
            color: #fd8d9f;
            font-weight: bold;
            margin-bottom: 25px;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
            flex-direction: column;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}
