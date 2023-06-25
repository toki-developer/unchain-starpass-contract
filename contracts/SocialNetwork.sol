// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "./interfaces/ISocialNetwork.sol";

contract SocialNetwork is ISocialNetwork {
    Post[] private _posts;
    mapping(uint256 => address[]) private _likers;

    function _getPostDetail(uint256 _postId)
        private
        view
        returns (PostDetail memory)
    {
        Post memory target = _posts[_postId];
        return
            PostDetail({
                postId: _postId,
                author: target.author,
                message: target.message,
                totalLikes: _likers[_postId].length,
                time: target.time
            });
    }

    function post(string memory _message) external {
        Post memory newPost = Post({
            author: msg.sender,
            message: _message,
            time: block.timestamp
        });
        _posts.push(newPost);
    }

    function getLastPostId() external view returns (uint256) {
        if (_posts.length == 0) {
            revert("Posts does not exist.");
        }
        return _posts.length - 1;
    }

    function getPost(uint256 _postId)
        external
        view
        returns (PostDetail memory)
    {
        return _getPostDetail(_postId);
    }

    function like(uint256 _postId) external {
        for (uint256 i = 0; i < _likers[_postId].length; i++) {
            if (_likers[_postId][i] == msg.sender) {
                revert("Already liked");
            }
        }

        _likers[_postId].push(msg.sender);
    }

    function unlike(uint256 _postId) external {
        uint256 targetIndex = type(uint256).max;

        for (uint256 i = 0; i < _likers[_postId].length; i++) {
            if (_likers[_postId][i] == msg.sender) {
                targetIndex = i;
            }
        }

        if (targetIndex == type(uint256).max) {
            revert("Not already liked");
        }

        for (uint256 i = targetIndex; i < _likers[_postId].length - 1; i++) {
            _likers[_postId][i] = _likers[_postId][i + 1];
        }
        _likers[_postId].pop();
    }

    // order => 1: time(asc), 2:time(desc), 3:like(asc), 4:like(desc)
    function getPosts(uint256 order)
        external
        view
        returns (PostDetail[] memory)
    {
        if (order != 1 && order != 2 && order != 3 && order != 4) {
            revert("Order value is wrong.");
        }

        PostDetail[] memory result = new PostDetail[](_posts.length);

        for (uint256 i = 0; i < _posts.length; i++) {
            PostDetail memory postDetail = _getPostDetail(i);

            //Put data into RESULT while sorting
            if (order == 1) {
                result[i] = postDetail;
            } else if (order == 2) {
                result[_posts.length - 1 - i] = postDetail;
            } else if (order == 3) {
                if (i == 0) {
                    result[0] = postDetail;
                    continue;
                }
                uint256 index = i;
                for (uint256 j = 0; j < i; j++) {
                    if (postDetail.totalLikes > result[j].totalLikes) {
                        index = j;
                        break;
                    }
                }
                for (uint256 j = i - 1; j >= index; j--) {
                    result[j + 1] = result[j];
                    if (j == 0) {
                        break;
                    }
                }
                result[index] = postDetail;
            } else if (order == 4) {
                if (i == 0) {
                    result[0] = postDetail;
                    continue;
                }
                uint256 index = i;
                for (uint256 j = 0; j < i; j++) {
                    if (postDetail.totalLikes < result[j].totalLikes) {
                        index = j;
                        break;
                    }
                }
                for (uint256 j = i - 1; j >= index; j--) {
                    result[j + 1] = result[j];
                    if (j == 0) {
                        break;
                    }
                }
                result[index] = postDetail;
            }
        }

        return result;
    }
}
