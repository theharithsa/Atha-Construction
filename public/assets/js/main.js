// Main JavaScript file for Atha Construction website

$(document).ready(function() {
    // Initialize components
    initializeFormWizard();
    initializeAnimations();
    initializeTestimonials();
    initializeFormHandlers();
});

// Form wizard initialization
function initializeFormWizard() {
    var totalSteps = $(".steps li").length;
    
    if (totalSteps === 0) return; // No form wizard on this page

    // Initialize the first step and form section
    $(".steps li:nth-of-type(1)").addClass("active");
    $(".myContainer .form-container:nth-of-type(1)").addClass("active");

    let autoPlayInterval;

    // Function to navigate to the next step
    function goToNextStep() {
        var currentIndex = $(".form-container.active").index();
        if (currentIndex < totalSteps - 1) {
            $(".steps li").eq(currentIndex + 1).addClass("active");
            $(".form-container")
                .eq(currentIndex)
                .removeClass("active flipInX")
                .next()
                .addClass("active flipInX");
        } else {
            resetToFirstStep();
        }
    }

    // Function to reset to the first step
    function resetToFirstStep() {
        $(".steps li").removeClass("active");
        $(".form-container").removeClass("active flipInX");
        $(".steps li:nth-of-type(1)").addClass("active");
        $(".form-container:nth-of-type(1)").addClass("active flipInX");
    }

    // Function to autoplay steps
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(goToNextStep, 1000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Next button functionality
    $(".form-container").on("click", ".next", function() {
        stopAutoPlay();
        goToNextStep();
    });

    // Back button functionality
    $(".form-container").on("click", ".back", function() {
        stopAutoPlay();
        var currentIndex = $(".form-container.active").index();
        if (currentIndex > 0) {
            $(".steps li").eq(currentIndex).removeClass("active");
            $(".form-container")
                .eq(currentIndex)
                .removeClass("active flipInX")
                .prev()
                .addClass("active flipInY");
        }
    });

    // Step click functionality
    $(".steps li").on("click", function() {
        stopAutoPlay();
        var stepIndex = $(this).index();
        $(".steps li").removeClass("active");
        $(this).prevAll().addClass("active");
        $(this).addClass("active");

        $(".myContainer .form-container").removeClass("active flipInX");
        $(".myContainer .form-container").eq(stepIndex).addClass("active flipInX");
    });

    // Start autoplay
    startAutoPlay();
}

// Scroll down functionality
function initializeScrollDown() {
    $('.scroll-down').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#next-section').offset().top - 75
        }, 800);
    });
}

// Animation initialization
function initializeAnimations() {
    if (typeof IntersectionObserver !== 'undefined') {
        const options = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate left group paragraphs
                    const leftGroup = entry.target.querySelectorAll(".animated-group-left p");
                    leftGroup.forEach((p, index) => {
                        setTimeout(() => {
                            p.style.animation = `fadeInLeft 0.5s ease-out ${index * 0.5}s forwards`;
                        }, 0);
                    });

                    // Animate right group paragraphs
                    const rightGroup = entry.target.querySelectorAll(".animated-group-right p");
                    rightGroup.forEach((p, index) => {
                        setTimeout(() => {
                            p.style.animation = `fadeInRight 0.5s ease-out ${index * 0.5}s forwards`;
                        }, 0);
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe animated sections
        const sections = document.querySelectorAll(".animated-section");
        sections.forEach(section => observer.observe(section));
    }
}

// Testimonials carousel
function initializeTestimonials() {
    if ($("#testimonial-owl").length) {
        $("#testimonial-owl").owlCarousel({
            items: 2,
            dots: true,
            margin: 50,
            nav: true,
            loop: true,
            autoplay: 3000,
            autoplayHoverPause: true,
            slideSpeed: 3000,
            paginationSpeed: 5000,
            smartSpeed: 1000,
            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
            responsive: {
                992: { items: 3 },
                600: { items: 3 },
                320: { items: 2 },
                280: { items: 2 }
            }
        });
    }
}

// Form handlers
function initializeFormHandlers() {
    // Footer form handler
    $('#footer-form').on('submit', async function(e) {
        e.preventDefault();
        await handleFormSubmission(this, '#footer-note', '#footer-btn');
    });

    // Career form handler
    $('#careers').on('submit', async function(e) {
        e.preventDefault();
        await handleFormSubmission(this, '#carnote', '#submit_btn_2');
    });

    // Package form handler (popup)
    $('#footer-popup').on('submit', async function(e) {
        e.preventDefault();
        await handleFormSubmission(this, '#footer-note', '#footer-btn');
    });
}

// Generic form submission handler
async function handleFormSubmission(form, noteSelector, buttonSelector) {
    const formData = new FormData(form);
    const submitBtn = $(buttonSelector);
    const noteDiv = $(noteSelector);
    
    // Disable submit button
    const originalText = submitBtn.val() || submitBtn.text();
    submitBtn.prop('disabled', true);
    
    if (submitBtn.is('button')) {
        submitBtn.text('Sending...');
    } else {
        submitBtn.val('Sending...');
    }
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.text();
        
        if (response.ok && result === 'OK') {
            noteDiv.html('<p style="color:green;width:100%;">Thank you! We will get back to you soon.</p>');
            form.reset();
        } else {
            noteDiv.html(result);
        }
    } catch (error) {
        noteDiv.html('<p style="color:red;width:100%;">Failed to send. Please try again later.</p>');
    } finally {
        // Re-enable submit button
        submitBtn.prop('disabled', false);
        
        if (submitBtn.is('button')) {
            submitBtn.text(originalText);
        } else {
            submitBtn.val(originalText);
        }
    }
}

// Modal functions for packages
function showModel() {
    const popUp = document.getElementById('popUp');
    const overlay = document.getElementById('overlay');
    
    if (popUp && overlay) {
        popUp.classList.add("show");
        overlay.classList.add("show");
    }
}

function closeModel() {
    const popUp = document.getElementById('popUp');
    const overlay = document.getElementById('overlay');
    
    if (popUp && overlay) {
        popUp.classList.remove("show");
        overlay.classList.remove("show");
    }
}

function showModel1() {
    const popUp1 = document.getElementById('popUp1');
    const overlay1 = document.getElementById('overlay1');
    
    if (popUp1 && overlay1) {
        popUp1.classList.add("show");
        overlay1.classList.add("show");
    }
}

function closeModel1() {
    const popUp1 = document.getElementById('popUp1');
    const overlay1 = document.getElementById('overlay1');
    
    if (popUp1 && overlay1) {
        popUp1.classList.remove("show");
        overlay1.classList.remove("show");
    }
}

function showModel2() {
    const popUp2 = document.getElementById('popUp2');
    const overlay2 = document.getElementById('overlay2');
    
    if (popUp2 && overlay2) {
        popUp2.classList.add("show");
        overlay2.classList.add("show");
    }
}

function closeModel2() {
    const popUp2 = document.getElementById('popUp2');
    const overlay2 = document.getElementById('overlay2');
    
    if (popUp2 && overlay2) {
        popUp2.classList.remove("show");
        overlay2.classList.remove("show");
    }
}

// File upload display
$(document).ready(function() {
    $('.file-upload-field').on('change', function() {
        const fileName = this.files[0] ? this.files[0].name : 'Select your file!';
        $(this).closest('.file-upload-wrapper').attr('data-text', fileName);
    });
});

// Initialize scroll down functionality
$(document).ready(function() {
    initializeScrollDown();
});
