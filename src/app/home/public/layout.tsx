import { IPageProps } from '@/interfaces/common/IPageProps.interface';

export default async function PublicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: IPageProps;
}) {
  return <div>Public</div>;
}
