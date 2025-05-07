import { IPageProps } from '@/interfaces/common/IPageProps.interface';

export default async function PrivateLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: IPageProps;
}) {
  return <div>Private</div>;
}
