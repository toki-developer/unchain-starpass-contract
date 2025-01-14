// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "./interfaces/ISocialNetwork.sol";

contract SocialNetwork is ISocialNetwork {
    // 投稿一覧 postIdは連番
    Post[] private _posts;
    mapping(uint256 => address[]) private _likers;

    // Postの情報に、postId、いいねの数、いいね済みかどうかの情報を追加
    function _getPostDetail(uint256 _postId)
        private
        view
        returns (PostDetail memory)
    {
        Post memory target = _posts[_postId];

        address[] memory likers = _likers[_postId];
        uint256 isLike = 1; //1 true, 2 false
        for(uint256 i = 0; i < likers.length; i++) {
            if(likers[i] == msg.sender) {
                isLike = 2;
            }
        }

        return
            PostDetail({
                postId: _postId,
                author: target.author,
                message: target.message,
                totalLikes: _likers[_postId].length,
                time: target.time,
                isLike: isLike
            });
    }

    //投稿
    function post(string memory _message) external {
        Post memory newPost = Post({
            author: msg.sender,
            message: _message,
            time: block.timestamp
        });
        _posts.push(newPost);
    }

    //最後の投稿のIDを取得
    function getLastPostId() external view returns (uint256) {
        if (_posts.length == 0) {
            revert("Posts does not exist.");
        }
        return _posts.length - 1;
    }

    //投稿を1件取得
    function getPost(uint256 _postId)
        external
        view
        returns (PostDetail memory)
    {
        return _getPostDetail(_postId);
    }

    //投稿にいいね
    function like(uint256 _postId) external {
        //すでにいいねの場合はエラー
        for (uint256 i = 0; i < _likers[_postId].length; i++) {
            if (_likers[_postId][i] == msg.sender) {
                revert("Already liked");
            }
        }

        _likers[_postId].push(msg.sender);
    }

    //投稿からいいねの削除
    function unlike(uint256 _postId) external {
        uint256 targetIndex = type(uint256).max;

        //いいねを取り消す対象を探す
        for (uint256 i = 0; i < _likers[_postId].length; i++) {
            if (_likers[_postId][i] == msg.sender) {
                targetIndex = i;
            }
        }

        //対象をいいねしていない場合はエラー
        if (targetIndex == type(uint256).max) {
            revert("Not already liked");
        }

        //いいねのデータを1つずつ前に詰める。上書きすることでいいねを削除
        for (uint256 i = targetIndex; i < _likers[_postId].length - 1; i++) {
            _likers[_postId][i] = _likers[_postId][i + 1];
        }
        _likers[_postId].pop();
    }

    //いいねを複数権取得
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

            //ソートしながら、resultにデータを入れる
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
