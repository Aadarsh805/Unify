import React, { useEffect } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

const Snackbar: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar("Welcome to my website!", { variant: "info" });
  }, []);

  return <div></div>;
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Snackbar />
    </SnackbarProvider>
  );
}
