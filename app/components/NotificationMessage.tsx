import { FC, useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

type NotificationMessageProps = {
  text: string;
  username: string;
  product?: string | undefined;
};

const NotificationMessage: FC<NotificationMessageProps> = ({
  text,
  username,
  product,
}) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {product ? (
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            {username} {text} {product}
          </Alert>
        ) : (
          <Alert severity="success">
            <AlertTitle>Congrats!</AlertTitle>
            {text} {username}
          </Alert>
        )}
      </Stack>
       
    </>
  );
};

export default NotificationMessage;
