import { Button, OptionsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <OptionsList>
        {options.map(option => (
          <Button
            type="button"
            name={option}
            key={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        ))}
      </OptionsList>
    </>
  );
};
