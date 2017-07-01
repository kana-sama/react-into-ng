import MessagesList from "./MessagesList";
import NewMessageForm from "./NewMessageForm";

export default ({ messagesIDs }) =>
  <div>
    <NewMessageForm />
    <MessagesList />
  </div>;
