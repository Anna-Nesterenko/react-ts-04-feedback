import { NotifMessage } from "./Notification.styled";

type onMessage = {
  message: string;
};

export const Notification = ({ message }: onMessage) => {
  return (
    <>
      <NotifMessage>{message}</NotifMessage>
    </>
  );
};
