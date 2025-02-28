package org.cerdBlog.blogServer.service;

import org.cerdBlog.blogServer.entity.Post;
import org.cerdBlog.blogServer.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PostServiceImp implements PostService {

    @Autowired
    private PostRepository postRepository;

    public Post savePost(Post post)
    {
        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date());

        return postRepository.save(post);
    }

    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }
}
