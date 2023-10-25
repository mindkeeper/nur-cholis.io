import { gql, useQuery } from '@apollo/client';

interface PrimaryLanguage {
  id: string;
  name: string;
}
export interface PinnedItem {
  __typename: string;
  stargazerCount: number;
  id: string;
  name: string;
  url: string;
  primaryLanguage: PrimaryLanguage;
}
export const useGetPinnedItems = () => {
  const query = gql`
    {
      user(login: "mindkeeper") {
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                url
                stargazerCount
                name
                description
                primaryLanguage {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(query);

  const pinnedItems = data?.user?.pinnedItems?.edges.map(
    ({ node }: { node: PinnedItem }) => node
  );

  return {
    data,
    loading,
    error,
    pinnedItems,
  };
};
