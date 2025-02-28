package org.cerdBlog.blogServer.service;


import org.cerdBlog.blogServer.entity.Post;

import java.util.List;

public interface PostService {
    Post savePost(Post post);

    List<Post> getAllPosts();
}
