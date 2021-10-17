import snoowrap from 'snoowrap';

const requester = new snoowrap({
  userAgent: 'Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion',
  clientId: 'PnxVBEKgdu-nj9VffhBukw',
  clientSecret: 'kI0HAdoHJJftv7M8VS1bfd8Od5DMeQ',
  username: 'username',
  password: 'password',
});

export const getHot = async (sub_reddit) => {
  const response = await requester.getHot(sub_reddit, { limit: 15 });

  return response;
};

export const getBest = async (sub_reddit) => {
  const response = await requester.getBest(sub_reddit, { limit: 15 });

  return response;
};

export const getNew = async (sub_reddit) => {
  const response = await requester.getNew(sub_reddit, { limit: 15 });

  return response;
};

export const getTop = async (sub_reddit) => {
  const response = await requester.getTop(sub_reddit, { limit: 15 });

  return response;
};

export const getSubmission = async (submission_id) => {
  const response = await requester.getSubmission(submission_id).expandReplies({ limit: 5, depth: 20 });

  return response;
};
