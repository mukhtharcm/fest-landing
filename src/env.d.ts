/// <reference path="../.astro/types.d.ts" />
// import PocketBase from "pocketbase";

declare namespace App {
  interface Locals {
    pb: import("pocketbase").default;
    // pb: import("./utils/pocketbase-types").TypedPocketBase;
  }
}
