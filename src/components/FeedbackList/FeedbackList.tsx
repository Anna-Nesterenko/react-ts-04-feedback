import { Button } from "./FeedbackList.styled";

type feedbackProps = {
  handleFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  options: Array<string>;
};

export const FeedbackList = ({ options, handleFeedback }: feedbackProps) => {
  return (
    <>
      {options.map((el) => (
        <Button type="button" name={el} key={el} onClick={handleFeedback}>
          {el}
        </Button>
      ))}
    </>
  );
};
