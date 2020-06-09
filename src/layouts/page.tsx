import React, { useState, FunctionComponent } from 'react';
import { Heading, Title } from '../components/typeography';
import Link from 'gatsby-link'; // Using this style of import to make StoryBook happy

type PageProps = {
  pageTitle: string;
  siteTitle: string;
};

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    console.log('Toggling', isOpen);
    setOpen(!isOpen);
  };
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-green-500 p-4">
        <h1 className="flex items-center flex-shrink-0 text-white mr-2 tablet:mr-4">
          <Link to="/">{siteTitle}</Link>
        </h1>

        <div className="block tablet:hidden">
          <button
            onClick={toggleOpen}
            className="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full ${
            isOpen ? 'block' : 'hidden'
          } flex-grow tablet:flex tablet:items-center tablet:w-auto`}
        >
          <div className="text-sm tablet:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 tablet:inline-block tablet:mt-0 text-green-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 tablet:inline-block tablet:mt-0 text-green-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 tablet:inline-block tablet:mt-0 text-green-200 hover:text-white"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-green-500 text-green-200 w-full tablet:w-auto text-right ml-auto tablet:rounded-tl-lg pl-4 pr-4">
      A site by <a href="https://oddessay.com">Paul Bennett-Freeman</a>
    </footer>
  );
};

export const Page: FunctionComponent<PageProps> = ({
  siteTitle,
  pageTitle,
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Header siteTitle={siteTitle} />
      <main className="flex-grow">
        <Heading title={pageTitle}></Heading>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
