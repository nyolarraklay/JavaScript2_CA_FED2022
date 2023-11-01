import { clickLogOut } from "../clickListeners/clickListeners.mjs";
import { remove } from "../storage/index.mjs";

function wait(time) {
    return new Promise (function (res) {
      setTimeout(res, time)
    })
  };


export async function logout () {
clickLogOut();
await wait (300)
remove("profile")
}