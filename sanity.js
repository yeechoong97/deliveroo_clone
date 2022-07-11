import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const options = {
    projectId: "qwoxusny",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
}

const client = SanityClient(options);

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;