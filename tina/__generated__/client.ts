import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5ef907778560b6d4817d415ed29bd09023338ca5', queries,  });
export default client;
  