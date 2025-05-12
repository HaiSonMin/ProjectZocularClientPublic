import { Header } from "@/components/header/Header";
import { IPageProps } from "@/interfaces/common/IPageProps.interface";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
  params: IPageProps;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
