"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("./events");
async function main() {
    const clickEvent = {
        type: "click",
        x: 150,
        y: 300
    };
    const validSubmitEvent = {
        type: "submit",
        formId: "loginForm",
        values: {
            username: "Moises",
            password: "12345"
        }
    };
    const invalidSubmitEvent = {
        type: "submit",
        formId: "registerForm",
        values: {
            username: "Moises",
            password: ""
        }
    };
    const errorEvent = {
        type: "error",
        message: "Something went wrong."
    };
    await (0, events_1.handleUiEvent)(clickEvent);
    await (0, events_1.handleUiEvent)(validSubmitEvent);
    await (0, events_1.handleUiEvent)(errorEvent);
    try {
        await (0, events_1.handleUiEvent)(invalidSubmitEvent);
    }
    catch (error) {
        console.error("Caught error:", error.message);
    }
}
main();
