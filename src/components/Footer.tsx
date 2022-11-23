import { Link } from "react-router-dom";

type Props = {
  title: string;
  link: any; 
};

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-10 lg:py-20 w-full border-t mt-20">
      <div className="grid gap-10 lg:grid-cols-4 w-10/12 lg:w-9/12">
        <div className="text-primary">
          <Link to="/" className="text-3xl font-bold">
            LTL.
          </Link>
          <p className="mt-3 font-medium text-lg">
            Providing the best learning.
          </p>
          <div className="mt-5 flex items-center">
            <img src="/img/insta.png" alt="" className="h-6 mr-4    " />
            <img src="/img/fb.png" alt="" className="h-6 mr-4   " />
            <img src="/img/twtr.png" alt="" className="h-6 mr-4 " />
          </div>
        </div>
        <div className="lg:pl-16">
          <h1 className="mt-3 font-semibold text-primary text-lg">
            Quick links
          </h1>
          <div className="flex flex-col">
            <PageLink title="Home" link="/" />
            <PageLink title="Pricing" link="/" />
            <PageLink title="Features" link="/" />
            <PageLink title="Community" link="/" />
          </div>
        </div>
        <div>
          <h1 className="mt-3 font-semibold text-primary text-lg">
            Quick links
          </h1>
          <div className="flex flex-col">
            <PageLink title="Home" link="/" />
            <PageLink title="Pricing" link="/" />
            <PageLink title="Features" link="/" />
            <PageLink title="Community" link="/" />
          </div>
        </div>
        <div>
          <h1 className="mt-3 font-semibold text-primary text-lg">
            Disclaimer
          </h1>
          <div className="mt-2 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            temporibus nesciunt laudantium enim.
          </div>
        </div>
      </div>
      <p className="text-gray-500 flex mt-16 justify-center text-center w-10/12 lg:w-9/12">
        Copyright 2022 @ LTL.com
      </p>
    </div>
  );
}

function PageLink({ link, title }: Props) {
  return (
    <Link
      title={title}
      to={link}
      className="mt-2 capitalize text-gray-500 hover:text-primary"
    >
      {title}
    </Link>
  );
}
