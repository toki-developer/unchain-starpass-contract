// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "./interfaces/ISocialNetwork.sol";

contract SocialNetwork is ISocialNetwork {
    uint256 private _nextIdCounter = 1;

    mapping(uint256 => Post) private _posts;
    mapping(uint256 => address[]) private _likers;

    function _currentId() private view returns (uint256) {
        return _nextIdCounter - 1;
    }

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
        _posts[_nextIdCounter] = newPost;
        _nextIdCounter += 1;
    }

    function getLastPostId() external view returns (uint256) {
        if (_nextIdCounter == 1) {
            revert("Posts does not exist.");
        }
        return _currentId();
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

    function getPosts(uint256 limit, uint256 offset)
        external
        view
        returns (PostDetail[] memory)
    {
        uint256 currentId = _currentId();

        if (currentId < offset) {
            revert("Offset value is wrong.");
        }

        uint256 targetLastId = currentId - offset;
        uint256 loopNum = targetLastId > limit ? limit : targetLastId;

        PostDetail[] memory result = new PostDetail[](loopNum);

        for (uint256 i = 0; i < loopNum; i++) {
            result[i] = _getPostDetail(targetLastId - i);
        }

        return result;
    }
}
