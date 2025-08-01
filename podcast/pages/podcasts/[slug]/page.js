import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

const fetchPodcastPage = async (slug) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`podcasts/${slug}`, {
    version: "draft",
  });
  return response.data.story;
};

const PodcastPage = async (props) => {
  const story = await fetchPodcastPage(props.params.slug);
  return <StoryblokComponent story={story} />;
};

export default PodcastPage;
