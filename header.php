<?php 

error_reporting(0);

// Define the base URL dynamically
define('BASE_URL', ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . dirname($_SERVER['SCRIPT_NAME']) . './');

$current_page = basename($_SERVER['REQUEST_URI'], ".php"); // Get the current page name without the ".php" extension

include 'blog_data.php';

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="JH2zqBNAUIPT9d3-d2tA5CGOFXdkvijiZrb5kJDGVCk" />

    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="keywords" content="<?php echo $keywords; ?>">
    <?php
        // Get the protocol (http or https)
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";

        // Get the hostname
        $hostname = $_SERVER['HTTP_HOST'];

        // Get the request URI
        $requestUri = $_SERVER['REQUEST_URI'];

        // Combine to form the canonical URL
        $canonicalUrl = $protocol . $hostname . $requestUri;

        // Output the canonical URL in a meta tag
        echo '<link rel="canonical" href="' . htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8') . '" />';
    ?>

    <meta name="robots" content="index, follow">


    <!-- Google tag (gtag.js) --> 
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GNYXP1XF3S"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-GNYXP1XF3S'); </script>

    <!-- Google Tag Manager -->

    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NJ9ZQFZG');</script>

    <!-- End Google Tag Manager -->

    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Atha Construction",
          "alternateName": "Atha Construction",
          "url": "https://athaconstruction.in/",
          "logo": "https://athaconstruction.in/assetes/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 8049776616",
            "contactType": "technical support",
            "areaServed": "IN",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://www.instagram.com/atha_construction/",
            "https://www.facebook.com/profile.php?id=61569376468425",
            "https://www.linkedin.com/company/athaconstruction.in/"
          ]
        }
    </script>

    <script type="application/ld+json">
        {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Atha Construction",
          "url": "https://athaconstruction.in/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://athaconstruction.in/services{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
    </script>

    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Atha Construction",
          "image": "https://athaconstruction.in/assetes/images/logo.png",
          "@id": "",
          "url": "https://athaconstruction.in/",
          "telephone": "+91 8049776616",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.81/37, Ground Floor, The Hulkul, Lavelle Road,",
            "addressLocality": "bengaluru",
            "postalCode": "560001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9681327,
            "longitude": 77.5967302
          } ,
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61569376468425",
            "https://www.instagram.com/atha_construction/",
            "https://www.linkedin.com/company/athaconstruction.in/"
          ] 
        }
    </script>


    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Tenor+Sans&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="<?php echo BASE_URL; ?>assetes/images/Favicon.png" type="image/x-icon">

    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


    <!-- custom style -->

    <link rel="stylesheet" href="<?php echo BASE_URL; ?>assetes/styles/style.css">


</head>

<body>

    <!-- Google Tag Manager (noscript) -->

    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJ9ZQFZG"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <!-- End Google Tag Manager (noscript) -->


    <section class="navbar-section">
        <div class="container">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid d-flex justify-content-between">
                    <a class="navbar-brand" href="/">
                        <img src="<?php echo BASE_URL; ?>assetes/images/logo.png" alt="Atha construction" title="Atha construction">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav w-100 d-flex justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === '' || $current_page === 'atha' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'about' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>about">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'packages' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>packages">PACKAGES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'properties' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>properties">PROPERTIES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'careers' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>careers">Careers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'blogs' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>blogs">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'gallery' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>gallery">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'services' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>services">SERVICES</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link <?= $current_page === 'contact' ? 'active' : '' ?>" href="<?php echo BASE_URL; ?>contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>