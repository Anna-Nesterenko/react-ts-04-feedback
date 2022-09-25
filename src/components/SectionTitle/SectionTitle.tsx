import { TitleWrapper } from "./SectionTitle.styled";

type sectionProps = {
  title: string;
  children: React.ReactNode;
};
export const SectionTitle = ({ title, children }: sectionProps) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
      {children}
    </TitleWrapper>
  );
};
