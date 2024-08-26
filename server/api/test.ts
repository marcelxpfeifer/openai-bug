import OpenAI from "openai";

export default defineEventHandler(async (event) => {
  new OpenAI({
    apiKey: "xxx",
  });
  return "Hello, world!";
});
