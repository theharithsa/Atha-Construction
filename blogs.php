<?php

$title = 'Blogs | Home Construction Company in Bangalore | Atha construction';
$description = 'Get more information about the Home Construction Company in Bangalore with Atha construction. For details about our projects and services, visit our blog page today!';
$keywords = 'Home Construction In Bangalore, Home automation in Bangalore, Home Construction Company in Bangalore';
$h1 = "";

include 'header.php';
?>

<section class="sec-banner">
    <div class="bnr-img">
        <img src="./assetes/images/blog-header-image.jpg" class="w-100" alt="Building Contractors in Bangalore" title="Building Contractors in Bangalore">

        <div class="bg-bnr-layer">

        </div>

        <div class="baner-cont-abs1 d-lg-block d-none">
            <h1>
                Blogs
            </h1>
           

        </div>

    </div>
</section>



<section class="py-5 blogs" id="next-section">
    <div class="container px-2 px-md-5">
        <div class="main-heading text-center mb-4">
            <h2 class="fs-1">LATEST NEWS</h2>
            <p class="text-center">See what the press has to say.</p>
        </div>
        
        <div class="row">

            <?php foreach ($blog_posts as $slug => $post): ?> 
                <div class="col-md-4 mb-5">                        
                     <img src="<?php echo BASE_URL; ?><?php echo htmlspecialchars($post['image']); ?>" alt="<?php echo htmlspecialchars($post['alt']); ?>" class="img-fluid">
                    <div class="inner-blog-box">    
                        <h6><?php echo htmlspecialchars($post['date']); ?> </h6>
                        <h4><?php echo htmlspecialchars($post['title']); ?></h4>
                        <p><?php echo htmlspecialchars(substr(strip_tags($post['content']), 0, 200)); ?>...</p>
                        <a href="<?php echo BASE_URL . 'blog/' . $post['slug']; ?>" class="btn-theme-dark text-uppercase">Read More</a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>

<?php include "footer.php"; ?>