import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { FC, useState } from "react";

type NotificationMessageProps = {
  notification_text: string;
  notification_type: string;
};

const NotificationMessage: FC<NotificationMessageProps> = ({
  notification_text,
  // username,
  // product,
  notification_type,
}) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {notification_type === "interested" ? (
          <Alert severity="info">{notification_text}</Alert>
        ) : (
          <Alert severity="success">{notification_text}</Alert>
        )}
      </Stack>
    </>
  );
};

export default NotificationMessage;
