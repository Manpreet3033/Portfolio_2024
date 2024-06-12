export interface AddProjectProps {
  title: string;
  description: string;
  imgUrl: string | undefined;
  path: string;
}

export interface DeleteProjectProps {
  id: string;
  path: string;
}
