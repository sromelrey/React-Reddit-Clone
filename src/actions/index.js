import {
  getHot as getHotRequester,
  getBest as getBestRequester,
  getNew as getNewRequester,
  getTop as getTopRequester,
  getSubmission as getSubmissionRequester,
} from 'helpers/requester';
import * as ActionTypes from 'constants/actionTypes';
import _ from 'lodash';

export function getHot(sub_reddit) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_HOT_POST_REQUEST });

    await getHotRequester(sub_reddit)
      .then((res) => {
        const hot_formated = res.map((post) => {
          let media_metadata;
          if (typeof post.media_metadata === 'object') {
            media_metadata = Object.values(post?.media_metadata);
          }
          return {
            id: post.id,
            title: post.title,
            author: post.author.name,
            permalink: post.permalink,
            link_flair_text: post.link_flair_text,
            ups: post.ups,
            downs: post.downs,
            awards: post.all_awardings,
            num_comments: post.num_comments,
            created: post.created,
            created_utc: post.created_utc,
            edited: post.edited,
            media: post.media,
            gallery_data: !_.isNull(media_metadata) ? media_metadata : post.media_metadata,
            is_video: post.is_video,
            is_gallery: post.is_gallery,
            url: post.url,
            thumbnail: post.thumbnail,
          };
        });

        dispatch({ type: ActionTypes.GET_HOT_POST_SUCCESS, payload: { hot_formated } });
      })
      .catch((err) => console.log(err));
  };
}

export function getBest(sub_reddit) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_BEST_POST_REQUEST });

    await getBestRequester(sub_reddit)
      .then((res) => {
        const best_formated = res.map((post) => {
          let media_metadata;
          if (typeof post.media_metadata === 'object') {
            media_metadata = Object.values(post?.media_metadata);
          }
          return {
            id: post.id,
            title: post.title,
            author: post.author.name,
            permalink: post.permalink,
            link_flair_text: post.link_flair_text,
            ups: post.ups,
            downs: post.downs,
            awards: post.all_awardings,
            num_comments: post.num_comments,
            created: post.created,
            created_utc: post.created_utc,
            edited: post.edited,
            media: post.media,
            gallery_data: !_.isNull(media_metadata) ? media_metadata : post.media_metadata,
            is_video: post.is_video,
            is_gallery: post.is_gallery,
            url: post.url,
            thumbnail: post.thumbnail,
          };
        });

        dispatch({ type: ActionTypes.GET_BEST_POST_SUCCESS, payload: { best_formated } });
      })
      .catch((err) => console.log(err));
  };
}
export function getNew(sub_reddit) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_NEW_POST_REQUEST });

    await getNewRequester(sub_reddit)
      .then((res) => {
        const new_post_formated = res.map((post) => {
          let media_metadata;
          if (typeof post.media_metadata === 'object') {
            media_metadata = Object.values(post?.media_metadata);
          }
          return {
            id: post.id,
            title: post.title,
            author: post.author.name,
            permalink: post.permalink,
            link_flair_text: post.link_flair_text,
            ups: post.ups,
            downs: post.downs,
            awards: post.all_awardings,
            num_comments: post.num_comments,
            created: post.created,
            created_utc: post.created_utc,
            edited: post.edited,
            media: post.media,
            gallery_data: !_.isNull(media_metadata) ? media_metadata : post.media_metadata,
            is_video: post.is_video,
            is_gallery: post.is_gallery,
            url: post.url,
            thumbnail: post.thumbnail,
          };
        });

        dispatch({ type: ActionTypes.GET_NEW_POST_SUCCESS, payload: { new_post_formated } });
      })
      .catch((err) => console.log(err));
  };
}
export function getTop(sub_reddit) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_TOP_POST_REQUEST });

    await getTopRequester(sub_reddit)
      .then((res) => {
        const top_formated = res.map((post) => {
          let media_metadata;
          if (typeof post.media_metadata === 'object') {
            media_metadata = Object.values(post?.media_metadata);
          }
          return {
            id: post.id,
            title: post.title,
            author: post.author.name,
            permalink: post.permalink,
            link_flair_text: post.link_flair_text,
            ups: post.ups,
            downs: post.downs,
            awards: post.all_awardings,
            num_comments: post.num_comments,
            created: post.created,
            created_utc: post.created_utc,
            edited: post.edited,
            media: post.media,
            gallery_data: !_.isNull(media_metadata) ? media_metadata : post.media_metadata,
            is_video: post.is_video,
            is_gallery: post.is_gallery,
            url: post.url,
            thumbnail: post.thumbnail,
          };
        });

        dispatch({ type: ActionTypes.GET_TOP_POST_SUCCESS, payload: { top_formated } });
      })
      .catch((err) => console.log(err));
  };
}

export function getSubmission(submission_id) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_SUBMISSION_DETAILS_BY_ID_REQUEST });

    await getSubmissionRequester(submission_id)
      .then((res) => {
        const submission_details = res;
        const resolutions = submission_details.preview?.images[0]?.resolutions;
        let media_metadata;
        if (typeof submission_details.media_metadata === 'object') {
          media_metadata = Object.values(submission_details?.media_metadata);
        }

        const submission_details_formated = {
          ups: submission_details.ups,
          downs: submission_details.downs,
          title: submission_details.title,
          link_flair_text: submission_details.link_flair_text,
          score: submission_details.score,
          preview: submission_details.preview?.images[0],
          preview_resolution: !_.isUndefined(resolutions) && resolutions[resolutions.length - 1],
          num_comments: submission_details.num_comments,
          author: submission_details.author,
          is_video: submission_details.is_video,
          is_gallery: submission_details.is_gallery,
          awards: submission_details.all_awardings,
          created: submission_details.created,
          url: submission_details.url,
          thumbnail: submission_details.thumbnail,
          gallery_data: !_.isNull(media_metadata) ? media_metadata : submission_details?.media_metadata,
        };

        const comments =
          !_.isEmpty(submission_details.comments) &&
          submission_details.comments.map((comment) => {
            return {
              author_name: comment.author.name,
              body: comment.body,
              body_html: comment.body_html,
              created: comment.created,
              replies:
                !_.isEmpty(comment.replies) &&
                comment.replies.map((reply) => {
                  return {
                    author_name: reply.author.name,
                    body: reply.body,
                    body_html: reply.body_html,
                    ups: reply.ups,
                    replies: reply.replies,
                    created: reply.created,
                  };
                }),
              ups: comment.ups,
            };
          });

        dispatch({
          type: ActionTypes.GET_SUBMISSION_DETAILS_BY_ID_SUCCESS,
          payload: { submission_details: submission_details_formated, presubmission_details: submission_details, comments },
        });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.GET_SUBMISSION_DETAILS_BY_ID_FAILED, payload: { error: err } });
      });
  };
}

export function clearSubmission() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.CLEAR_SUBMISSION_DETAILS });
  };
}
