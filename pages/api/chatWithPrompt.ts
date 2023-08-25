import { Configuration, OpenAIApi } from "openai";

import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = _req.body;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: `You are a startup founder. Make the top-level system of all information concise and understandable in 10 or less, and nothing else. Format of information to output:
        - XXX
        - YYY
        - ZZZ`,
      },
      { role: "user", content: prompt },
    ],
    n: 1,
    stop: null,
    temperature: 1,
  });

  res.status(200).json({ answer: response.data.choices[0].message.content });
};

export default handler;
