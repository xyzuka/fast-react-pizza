import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // displays the route error
  const error = useRouteError();

  return (
    <div className="p-6">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
