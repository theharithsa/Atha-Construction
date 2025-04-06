<?php
// Function to generate a slug from a blog title
function generate_slug($title) {
    $slug = strtolower($title);                // Convert to lowercase
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug); // Replace non-alphanumeric characters with hyphens
    $slug = trim($slug, '-');                  // Trim extra hyphens from start and end
    return $slug;
}
?>
