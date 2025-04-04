<div class="col-md-3 ">

    <div class="border px-3 py-3">
        <h4 class="sidebar__widget-title">Latest Posts</h4>

        <div class="sidebar__post-list my-3">
            <?php
            // Loop through the blog posts
            foreach ($blog_posts as $slug => $post) {
            ?>
                <div class="sidebar__post-item mb-4">
                    <div class="sidebar__post-thumb">
                        <!-- Link to the blog post detail page -->
                        <a href="<?php echo $slug; ?>" class="text-dark">
                            <!-- Blog post thumbnail -->
                            <img src="<?php echo BASE_URL; ?><?php echo $post['image']; ?>" alt="<?php echo htmlspecialchars($post['title']); ?>" class="img-fluid mb-3">
                        </a>
                    </div>
                    <div class="sidebar__post-content">
                        <!-- Blog post title -->
                        <h5 class="title">
                            <a class="text-decoration-none text-dark" href="<?php echo BASE_URL . 'blog/' . $post['slug']; ?>" class="text-dark mt-2 font-15"><?php echo htmlspecialchars($post['title']); ?></a>
                        </h5>
                        <!-- Blog post date -->
                        <span class="date font-15"><i class="flaticon-time"></i><?php echo date('M j, Y', strtotime($post['date'])); ?></span>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
    </div>

</div>