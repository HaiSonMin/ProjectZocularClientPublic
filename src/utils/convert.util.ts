import { IQueries } from '@/interfaces/common/IRequest.interface';
import parse from 'html-react-parser';

export const convertObjToQueriesString = (
  queries?: IQueries,
  defaultLimit: string = '10',
  defaultPage: string = '1'
) => {
  const objSearchParams = queries || ({} as IQueries);

  if (!objSearchParams.limit) {
    objSearchParams.limit = defaultLimit;
  }
  if (!objSearchParams.page) {
    objSearchParams.page = defaultPage;
  }

  const stringQueries =
    '?' +
    Object.keys(objSearchParams)
      .map((key) => `${key}=${objSearchParams[key]}`)
      .join('&');

  return stringQueries;
};

export function convertStringToHtml(htmlString: string) {
  return parse(htmlString);
}
