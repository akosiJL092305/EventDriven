export type UiEvent =
  | { type: "click"; x: number; y: number }
  | { type: "submit"; formId: string; values: Record<string, string> }
  | { type: "error"; message: string };

export type Handler<E> = (event: E) => void | Promise<void>;

export async function handleUiEvent(event: UiEvent): Promise<void> {
  switch (event.type) {
    case "click":
      console.log(`click @ ${event.x},${event.y}`);
      break;

    case "submit":
      await new Promise((resolve) => setTimeout(resolve, 200));

      if (!Object.values(event.values).every(Boolean)) {
        throw new Error("Validation failed");
      }

      console.log("submitted", event.formId);
      break;

    case "error":
      console.error(event.message);
      break;
  }
}