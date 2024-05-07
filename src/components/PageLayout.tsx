import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="max-w-5xl px-4 mx-auto">{children}</div>;
}
