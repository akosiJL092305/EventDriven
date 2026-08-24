import { handleUiEvent, UiEvent } from "./events";

async function main(): Promise<void> {
  const clickEvent: UiEvent = {
    type: "click",
    x: 150,
    y: 300
  };

  const validSubmitEvent: UiEvent = {
    type: "submit",
    formId: "loginForm",
    values: {
      username: "Moises",
      password: "12345"
    }
  };

  const invalidSubmitEvent: UiEvent = {
    type: "submit",
    formId: "registerForm",
    values: {
      username: "Moises",
      password: ""
    }
  };

  const errorEvent: UiEvent = {
    type: "error",
    message: "Something went wrong."
  };

  await handleUiEvent(clickEvent);
  await handleUiEvent(validSubmitEvent);
  await handleUiEvent(errorEvent);

  try {
    await handleUiEvent(invalidSubmitEvent);
  } catch (error) {
    console.error("Caught error:", (error as Error).message);
  }
}

main();